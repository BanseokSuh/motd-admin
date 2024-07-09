import React, { useState } from 'react';
import styled from 'styled-components';


type ModalProps = {
    show: boolean;
    onClose: () => void;
    content: any;
};

const Modal = ({ show, onClose, content }: ModalProps) => {
    // const [name, setName] = useState(content.name);
    // const [description, setDescription] = useState(content.description);
    // const [order, setOrder] = useState(content.order);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [order, setOrder] = useState("");

    if (!show) {
        return null;
    }

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

            <>
                <ModalContainer>
                    <StyledModal>
                        <ModalTitle>상세보기</ModalTitle>

                        <ModalContentWrapper>
                            <ModalImg src={content.img} alt={content.name} />

                            <ModalContent>
                                <InputWrapper>
                                    <label htmlFor="name">이름:</label>
                                    <input
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="description">설명:</label>
                                    <input
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="order">순서:</label>
                                    <input
                                        id="order"
                                        type="number"
                                        value={order}
                                        onChange={(e) => setOrder(e.target.value)}
                                    />
                                </InputWrapper>
                            </ModalContent>
                        </ModalContentWrapper>
                        <CloseButton onClick={onClose}>Close</CloseButton>
                    </StyledModal>
                </ModalContainer>
            </>
        </>
    );
};

const ModalContainer = styled.div`  
`;

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%; /* Increased width */
    height: 70%; /* Increased height */
    overflow-y: auto; /* Add scroll for content overflow */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    text-align: center;
`;

const ModalTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
`;

const ModalContentWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
`;

const ModalImg = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 1rem;
`;

const ModalContent = styled.div`
    width: 50%;
    padding: 0 1rem;
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
        margin-right: 1rem;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3; /* Optional: Change color on hover */
  }
`;



export default Modal;