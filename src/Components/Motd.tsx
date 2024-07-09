import styled from 'styled-components';
import React, { useState } from 'react';
import { CSSProperties } from 'react'; // Import CSSProperties for type checking
import Modal from './Modal';

interface Content {
    id: number;
    name: string;
    description: string;
    order: number;
    img: string;
}

const Motd: React.FC = () => {
    const [modalShow, setModalShow] = useState(false);
    const [currentContent, setCurrentContent] = useState(null);

    const handleOpenModal = (content: any) => {
        setCurrentContent(content);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    const contents: Content[] = [
        { id: 1, name: 'Motd 1', description: 'Description 1', order: 1, img: 'https://via.placeholder.com/200' },
        { id: 2, name: 'Motd 2', description: 'Description 2', order: 2, img: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Motd 3', description: 'Description 3', order: 3, img: 'https://via.placeholder.com/200' }
    ];

    const styles: { [key: string]: CSSProperties } = { // Use CSSProperties for type checking
        table: {
            width: '100%',
            borderCollapse: 'collapse', // This is a valid value for borderCollapse
            boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
        },
        th: {
            backgroundColor: '#00BFFF', // Light blue color
            color: 'white',
            padding: '10px 15px',
            textAlign: 'left',
        },
        td: {
            padding: '10px 15px',
            borderBottom: '1px solid #dddddd',
        },
        tr: {
            // Inline styles for pseudo-classes like ':nth-child' are not supported in React inline styles.
            // Consider using CSS classes or styled-components for complex styles.
        },
    };

    return (
        <div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>이름</th>
                        <th style={styles.th}>설명</th>
                        <th style={styles.th}>순서</th>
                        <th style={styles.th}>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map((content, index) => (
                        <tr key={content.id} style={index % 2 === 0 ? { backgroundColor: '#f2f2f2' } : undefined}>
                            <td style={styles.td}>{content.id}</td>
                            <td style={styles.td}>{content.name}</td>
                            <td style={styles.td}>{content.description}</td>
                            <td style={styles.td}>{content.order}</td>
                            <td style={styles.td}>
                                <DetailButton onClick={() => handleOpenModal(content)}>Details</DetailButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={modalShow} onClose={handleCloseModal} content={currentContent} />
        </div>
    );
};


const DetailButton = styled.button`
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  padding: 10px 20px; /* Padding around the text */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Text size */
  transition: background-color 0.2s; /* Smooth background color transition on hover */

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

export default Motd;