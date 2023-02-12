import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseTop, chooseBottom } from '../../redux/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MemeFormProps {
    id?:string;
    data?:{}
}

interface MemeState {
    name: string;
    top: string;
    bottom: string;
}

export const MemeForm = (props:MemeFormProps) => {
    
    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<MemeState>(state => state.name);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        // the ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseName(data.name));
            dispatch(chooseTop(data.top));
            dispatch(chooseBottom(data.bottom));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Input {...register('name')} name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor='top'>Top</label>
                    <Input {...register('top')} name="top" placeholder="Top" />
                </div>
                <div>
                    <label htmlFor='bottom'>Bottom</label>
                    <Input {...register('bottom')} name="bottom" placeholder="Bottom" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
        )
}