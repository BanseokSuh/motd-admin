import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMotd, modifyMotd, addMotd, uploadImageAndGetUrl } from '../Services/Motd/Motd';

type ModalProps = {
    show: boolean;
    onClose: () => void;
    id: string;
};

const Modal = ({ show, onClose, id }: ModalProps) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [order, setOrder] = useState(0);
    const [imageUrl, setimageUrl] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");

    const getMotdFromDBAndSet = async (id: string) => {
        const motdSnapshot = await getMotd(id);

        const {
            name, description, order, imageUrl, redirectUrl
        } = motdSnapshot.data() as any;

        setName(name);
        setDescription(description);
        setOrder(order);
        setimageUrl(imageUrl);
        setRedirectUrl(redirectUrl);
    };

    const onModify = async () => {
        const content = {
            name,
            description,
            order,
            imageUrl,
            redirectUrl,
            active: true
        };

        await modifyMotd(id, content);
        onClose();
    };

    const onAdd = async () => {
        const content = {
            name,
            description,
            order,
            redirectUrl,
            imageUrl
        };

        await addMotd(content);
        onClose();
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (id) {
                onModify();
            } else {
                onAdd();
            }
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const url = await uploadImageAndGetUrl(file);

            setimageUrl(url);
        }
    }

    useEffect(() => {
        if (id) {
            getMotdFromDBAndSet(id);
        } else {
            setName("");
            setDescription("");
            setOrder(0);
            setimageUrl("");
            setRedirectUrl("");
        }

        const handleKeyDown = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [id, onClose]);

    if (!show) return null;

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000
            }} onClick={onClose}></div>

            <ModalContainer>
                <StyledModal>
                    <ModalTitle>상세보기</ModalTitle>

                    <ModalContentWrapper>
                        <ModalImgWrapper>
                            <ModalImg src={imageUrl} alt={name} />
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                        </ModalImgWrapper>
                        <ModalContent>
                            <InputWrapper>
                                <label htmlFor="name">이름</label>
                            </InputWrapper>
                            <InputWrapper>
                                <input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    readOnly
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <label htmlFor="description">설명</label>
                            </InputWrapper>

                            <InputWrapper>
                                <input
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <label htmlFor="order">순서</label>
                            </InputWrapper>
                            <InputWrapper>
                                <input
                                    id="order"
                                    type="number"
                                    value={order}
                                    onChange={(e) => setOrder(Number(e.target.value))}
                                    onKeyDown={handleKeyPress}
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <label htmlFor="description">리다이렉트url</label>
                            </InputWrapper>

                            <InputWrapper>
                                <input
                                    id="redirectUrl"
                                    value={redirectUrl}
                                    onChange={(e) => setRedirectUrl(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                            </InputWrapper>
                        </ModalContent>
                    </ModalContentWrapper>
                    {id ? (
                        <ModifyButton onClick={onModify}>수정</ModifyButton>
                    ) : (
                        <AddButton onClick={onAdd}>추가</AddButton>
                    )}
                    <CloseButton onClick={onClose}>닫기</CloseButton>
                </StyledModal>
            </ModalContainer>
        </>
    );
};

const ModalContainer = styled.div`  
`;

const ModalImgWrapper = styled.div`
    width: 35%;
    margin-bottom: 1rem;
    
`;

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 70%;
    overflow-y: auto;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    text-align: center;
`;

const ModalTitle = styled.h2`
    margin-bottom: 2.2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
`;

const ModalContentWrapper = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-evenly;
`;

const ModalImg = styled.img`
    width: 110%;
    height: auto;
    margin-bottom: 1rem;
    vertical-align: middle;
    text-align: center;
`;

const ModalContent = styled.div`
    width: 50%;
    padding: 0 2rem;
    text-align: left;
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    overflow-y: auto;
    max-height: 100%;
    margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    label {
        width: 6rem;
        font-weight: bold;
        text-align: left;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }
`;

const ModifyButton = styled.button`
  padding: 10px 20px;
  margin: 0 1rem;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #3F63C4;
  color: white;

  &:hover {
    background-color: darkgray; /* Optional: Change color on hover */
  }
`;

const AddButton = styled.button`
  padding: 10px 20px;
  margin: 0 1rem;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #3F63C4;
  color: white;

  &:hover {
    background-color: darkgray; /* Optional: Change color on hover */
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: darkgray; /* Optional: Change color on hover */
  }
`;



export default Modal;