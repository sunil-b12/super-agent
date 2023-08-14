import React, { useContext, useState } from 'react';
import SuperAgentContext from '../Context/SuperAgentContext';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddSuperAgent from './AddSuperAgent';
import { AiOutlineClose } from "react-icons/ai";
const SuperAgent = () => {
    const { superAgentData, loading, error } = useContext(SuperAgentContext);
    const [show, setShow] = useState(false);

    console.log(show)
    return (
        <>
            <div style={{ padding: "20px" }} className='container grid'>
                <h2 className='text-center mt-3'>Super Agent Data</h2>
                <div className="addButton my-5 d-flex justify-content-end">
                    <Button variant="primary" onClick={() => setShow(true)}>
                        Create Agent
                    </Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FullName</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th>AgentCode</th>
                            <th>AllowApp</th>
                            <th>GradingRate</th>
                            <th>NoOfProperty</th>
                            <th>IsActive</th>
                            <th>CreatedDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            superAgentData.map((agentData) => {
                                return <tr key={agentData.AgentID}>
                                    <td>{agentData.AgentID}</td>
                                    <td>{agentData.FullName}</td>
                                    <td>{agentData.UserName}</td>
                                    <td>{agentData.Address}</td>
                                    <td>{agentData.AgentCode}</td>
                                    <td>{agentData.AllowApp}</td>
                                    <td>{agentData.GradingRate}</td>
                                    <td>{agentData.NoOfProperty}</td>
                                    <td>{agentData.IsActive}</td>
                                    <td>{agentData.CreatedDate}</td>
                                </tr>

                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="custom-modal"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Create New Super Agent
                        </Modal.Title>
                        <button onClick={() => setShow(false)} className="uk-button bg-close-btn">
                            <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <AddSuperAgent />
                    </Modal.Body>
                </Modal>
            </div >
        </>
    );
};

export default SuperAgent;
