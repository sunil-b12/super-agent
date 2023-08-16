import React, { createContext, useContext, useState, useEffect } from 'react';
import { Fetchdata } from '../Hooks/getData'; // Import your data fetching function
import SuperAgentContext from './SuperAgentContext'

export const SuperAgentProvider = ({ children }) => {

    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [allow, setAllow] = useState("-1")
    const [verify, setVerify] = useState("-1")
    const [userType, setUserType] = useState("-1")
    const [isUploaded, setIsUploaded] = useState(false)
    const [image, setImage] = useState('')
    const [id, setId] = useState(null)
    const [superAgentList, setSuperAgentList] = useState([])

    const initialValue = {
        AgentCode: "",
        FullName: "",
        UserName: "",
        Password: "",
        Address: "",
        Image: "",
        District: "",
        StarGrading: "",
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProductCat: "",
        ProductType: "",
        Statement: "",
        Contact: "",
    }
    const [formValue, setFormValue] = useState(initialValue)
    const [editSuperAgent, setEditSuperAgent] = useState(false)
    const [superAgentData, setSuperAgentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSuperAgent()
    }, [])

    const getSuperAgent = () => {
        const dataForm = {
            UserID: "-1",
            IsActive: "-1",
            AllowApp: "-1",
            Flag: "S",
            AuthCode: "r1d3r",
            Type: "POST",
            FetchURL: 'https://testing.esnep.com/happyhomes/api/admin/agent'
        }

        Fetchdata(dataForm)
            .then(function (result) {
                if (result.StatusCode === 200) {
                    const postResult = result.Values || [];
                    setSuperAgentData(postResult);
                    setLoading(false);
                    setError(null);
                } else {
                    setSuperAgentData([]);
                    setLoading(false);
                    setError('Error fetching data'); // Set your error message accordingly
                }
            })
            .catch(function (error) {
                setSuperAgentData([]);
                setLoading(false);
                setError('Error fetching data'); // Set your error message accordingly
            });
    };

    const contextValue = {
        getSuperAgent,
        superAgentData,
        loading,
        error,
        formValue, setFormValue,
        editSuperAgent, setEditSuperAgent,
        superAgentList, setSuperAgentList,
        formError, setFormError,
        isSubmit, setIsSubmit,
        isUploaded, setIsUploaded,
        image, setImage,
        initialValue

    };

    return (
        <SuperAgentContext.Provider value={contextValue}>
            {children}
        </SuperAgentContext.Provider>
    );
};


export default SuperAgentProvider