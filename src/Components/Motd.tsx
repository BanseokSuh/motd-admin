import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearch, BiTrash } from "react-icons/bi";
import { getMotdList, deleteMotd } from '../Services/Motd/Motd';
import Modal from './MotdModal';

const Motd: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentContentId, setCurrentContentId] = useState("");
  const [motd, setMotd] = useState<{ id: string; name: string; description: string; order: number; imageUrl: string; redirectUrl: string }[]>([]);

  const handleOpenModal = (id: string) => {
    console.log('content', id);

    if (id) {
      setCurrentContentId(id);
    } else {
      setCurrentContentId("");
    }

    setModalShow(true);
  };

  const handleCloseModal = async () => {
    setModalShow(false);
    await getMotdListFromDB();
    setCurrentContentId("");
  };

  const deleteData = async (id: string) => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (!isConfirmed) {
      return;
    }

    alert("삭제되었습니다.");
    await deleteMotd(id);
    await getMotdListFromDB();
  };

  const getMotdListFromDB = async () => {
    const motdListSnapshot = await getMotdList();

    const motdList = motdListSnapshot.docs.map((doc: any) => {
      const {
        name, description, order, imageUrl, redirectUrl
      } = doc.data();

      return {
        id: doc.id,
        name,
        description,
        order,
        imageUrl,
        redirectUrl
      }
    });

    setMotd(motdList);
  };


  useEffect(() => {
    getMotdListFromDB();
  }, []);

  return (
    <div>
      <CreateButton onClick={() => handleOpenModal("")}>추가</CreateButton>
      <StyledTable>
        <StyledHead>
          <StyledRow>
            <StyledHeaderCell>이름</StyledHeaderCell>
            <StyledHeaderCell>설명</StyledHeaderCell>
            <StyledHeaderCell>순서</StyledHeaderCell>
            <StyledHeaderCell>리다이렉트url</StyledHeaderCell>
            <StyledHeaderCell>상세보기</StyledHeaderCell>
            <StyledHeaderCell>삭제</StyledHeaderCell>
          </StyledRow>
        </StyledHead>
        <tbody>
          {motd.map((content, index) => (
            <StyledRow key={index}>
              <StyledCell>{content.name}</StyledCell>
              <StyledCell>{content.description}</StyledCell>
              <StyledCell>{content.order}</StyledCell>
              <StyledCell>{content.redirectUrl}</StyledCell>
              <StyledCell>
                <DetailButton onClick={() => handleOpenModal(content.id)}>
                  <BiSearch />
                </DetailButton>
              </StyledCell>
              <StyledCell>
                <DeleteButton onClick={() => deleteData(content.id)}>
                  <BiTrash />
                </DeleteButton>
              </StyledCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
      <Modal show={modalShow} onClose={handleCloseModal} id={currentContentId} />
    </div>
  );
};

const CreateButton = styled.button`
  background-color: #007bff; /* Primary blue */
  color: white; /* White text */
  padding: 10px 24px;
  border: none; /* Remove border for a cleaner look */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Modern, sans-serif font */
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  margin-bottom: 1rem;

  &:focus {
    outline: none; /* Remove outline */
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledHead = styled.thead`
  background-color: #eee;
`;

const StyledHeaderCell = styled.th`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  
`;

const StyledCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const StyledRow = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DetailButton = styled.button`
  padding: 10px 20px;
  background-color: #C6ADD2;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: darkred;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default Motd;