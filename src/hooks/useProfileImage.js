
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTrailerVideo } from '../../utils/movieSlice';

import axios from "axios"
const useProfileImage=()=>{

    // const dispatch = useDispatch();

    const getMovieVides=async()=>{
        try {
            const response = await axios.get(
                "http://localhost:3000/api/v1/profile/profileId"
            );
            console.log("frtyhtht", response);

            const result = response.data.data;
            console.log(result.image);
             
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    }

    useEffect(() => {
        getMovieVides();
    }, []);

}

export default useProfileImage;
