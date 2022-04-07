import React from 'react'
import { withBaseLayout } from '../layouts/Base'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../actions/chats';
import { useNavigate } from 'react-router-dom';


function CreateChat() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const navigate = useNavigate();
  
    const onSubmit = formData => {
        dispatch( createChat(formData,user.uid))
            .then(_ => {
                navigate("/home");
            });
    }
    return (
        <div className="centered-view">
        <div className="centered-container">
            <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
            <div className="header">Create chat now!</div>
            <div className="subheader">Chat with people you know</div>
            <div className="form-container">
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    name="description"
                    className="form-control"
                    id="description">
                </textarea>
                </div>
                <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    {...register("image")}
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                />
                </div>
                <button
                type="submit"
                className="btn btn-outline-primary">Create</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default withBaseLayout(CreateChat,{canGoBack:true});

