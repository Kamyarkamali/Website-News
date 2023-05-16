import React, { useEffect } from 'react';

import "./Counter.css";

//Redux
import fetchData from '../../Redux/datacounter/dataAction';
import { useSelector,useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

//Icons
import GroupIcon from '@mui/icons-material/Group';

function Counter() {
    const state=useSelector(state=>state.datas.data.totalArticles)
    const members=4
    const dispatch=useDispatch()

    //FecthData
    useEffect(()=>{
        dispatch(fetchData())
    },[])
    console.log(state)

    const postCountAnimation = useSpring({ number: state, from: { number: 0 } });
    const memberscount = useSpring({ number: members, from: { number: 0 } });

  return (
    <div className='containercounter'>
        {
            <div className='count'> 
                {state && members && (
                    <div className='counts'> 
                        <div className='newscount'> 
                        <animated.span>{state}</animated.span>
                        <span>News</span>
                        </div>
                        <div className='newscount'> 
                        <animated.span>{members}</animated.span>
                        K<GroupIcon/> 
                        </div>
                    </div>
                )}
            </div>
        }
    </div>
  )
}

export default Counter