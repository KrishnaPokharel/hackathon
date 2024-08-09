'use client'
import React,{useEffect} from 'react';
import useAuthFetch from '@/customhooks/AuthFetch';


const Testing= () => {
    const AuthFetch = useAuthFetch()
    // Implement your component logic here
    useEffect(()=>{
        const fetchData = async()=>{

            const response = await AuthFetch('')
        }
        fetchData()
    },[AuthFetch])

    return (
        <div>
            {/* Render your component UI here */}
        </div>
    );
};

export default Testing;