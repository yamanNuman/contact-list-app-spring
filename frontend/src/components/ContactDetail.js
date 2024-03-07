import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getContact} from "../api/ContactService";

const ContactDetail = ({updateContact, updateImage}) => {
    const inputRef = useRef();
    const [contact, setContact] = useState({
        id:'',
        name: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        status: '',
        photoUrl: '',
    });

    const {id} = useParams();

    const fetchContact = async () => {
        try {
            const { data } = await getContact(id)
            setContact(data);
            console.log(data);
        }catch (error) {
            console.log(error)
        }
    };
    const selectImage = () => {
        inputRef.current.click();
    }
    const photoUpdate = async (file) => {
        try{
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('id', id);
            await updateImage(formData);
            setContact((prev) => ({ ...prev, photoUrl: `${prev.photoUrl}?updated_at=${new Date().getTime()}` }));
        } catch (error){
            console.log(error)
        }
    }

    const onChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };
    const onUpdateContact = async (event) => {
        event.preventDefault();
        await updateContact(contact);
        await fetchContact(id);
    };

    useEffect(() => {
        fetchContact();
    },[]);


    return (
        <>
            <Link to="/contacts" className='link'><i className='bi bi-arrow-left'></i>Back to list</Link>
            <div className='profile'>
                <div className='profile__details'>
                    <img src={contact.photoUrl} alt={`Profile photo of ${contact.name}`} />
                    <div className='profile__metadata'>
                        <p className='profile__name'>{contact.name}</p>
                        <p className='profile__muted'>JPG,GIF or PNG. Max size of 10MB</p>
                        <button onClick={selectImage} className='btn'><i className='bi bi-cloud-upload'></i>Change Photo</button>
                    </div>
                </div>
                <div className='profile__settings'>
                    <div>
                        <form onSubmit={onUpdateContact} className="form">
                            <div className="user-details">
                                <input type="hidden" defaultValue={contact.id} name="id" required />
                                <div className="input-box">
                                    <span className="details">Name</span>
                                    <input type="text" value={contact.name} onChange={onChange} name="name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" value={contact.email} onChange={onChange} name="email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone</span>
                                    <input type="text" value={contact.phone} onChange={onChange} name="phone" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input type="text" value={contact.address} onChange={onChange} name="address" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Title</span>
                                    <input type="text" value={contact.title} onChange={onChange} name="title" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Status</span>
                                    <input type="text" value={contact.status} onChange={onChange} name="status" required />
                                </div>
                            </div>
                            <div className="form_footer">
                                <button type="submit" className="btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <form style={{ display: 'none'}}>
                <input type='file' ref={inputRef}
                       onChange={(event) => photoUpdate(event.target.files[0])}
                       name='file' accept='image/*'/>
            </form>
        </>
    );
};

export default ContactDetail;