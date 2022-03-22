import React, { useEffect } from "react";
import TinderCard from "react-tinder-card"
import { useState } from "react";
import ChatContainer from "./components/ChatContainer";
import axios from 'axios'
import {useCookies} from "react-cookie"

function Dashboard() {
    const [user,setUser]=useState(null)
    const [genderedUser,setGenderedUser] = useState(null)
    
    
    const[cookies,setCookie,removeCookie] = useCookies(["user"])
    const userId = cookies.UserId
    
    const getUser = async() =>{
        try{
            const responce = await axios.get("http://localhost:8000/user",{
                params :{userId}
            })

            setUser(responce.data)
        }catch(err){
            console.log(err)
        }
    }

    const getGenderedUser = async()=>{
        try {
            const responce = axios.get("http://localhost:8000/gendered-users",{
            params : {gender : user?.gender_intrest}
        })

        setGenderedUser(responce.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getUser()
        getGenderedUser()
    },[user,genderedUser])

    console.log("user",user)
    console.log({gender : user?.gender_intrest})
    console.log("gendered User--ss-----------------",genderedUser)


    const characters = [
        {
            name: 'Sriram',
            url: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/64881855_408040696586398_8535953480223817728_n.jpg?stp=dst-jpg_s526x395&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oclNMSoGX0AX-6bUyF&_nc_ht=scontent.fhyd14-2.fna&oh=00_AT9ic2SI0GFe3wC_Ej5cokJaKvLQQR0NQytQUnrE1IfX1w&oe=62548EB5"
        },
        {
            name: 'Erlich Bachman',
            url: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/64881855_408040696586398_8535953480223817728_n.jpg?stp=dst-jpg_s526x395&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oclNMSoGX0AX-6bUyF&_nc_ht=scontent.fhyd14-2.fna&oh=00_AT9ic2SI0GFe3wC_Ej5cokJaKvLQQR0NQytQUnrE1IfX1w&oe=62548EB5"
        },
        {
            name: 'Monica Hall',
            url: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/64881855_408040696586398_8535953480223817728_n.jpg?stp=dst-jpg_s526x395&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oclNMSoGX0AX-6bUyF&_nc_ht=scontent.fhyd14-2.fna&oh=00_AT9ic2SI0GFe3wC_Ej5cokJaKvLQQR0NQytQUnrE1IfX1w&oe=62548EB5"
        },
        {
            name: 'Jared Dunn',
            url: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/64881855_408040696586398_8535953480223817728_n.jpg?stp=dst-jpg_s526x395&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oclNMSoGX0AX-6bUyF&_nc_ht=scontent.fhyd14-2.fna&oh=00_AT9ic2SI0GFe3wC_Ej5cokJaKvLQQR0NQytQUnrE1IfX1w&oe=62548EB5"
        },
        {
            name: 'Dinesh Chugtai',
            url: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/64881855_408040696586398_8535953480223817728_n.jpg?stp=dst-jpg_s526x395&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oclNMSoGX0AX-6bUyF&_nc_ht=scontent.fhyd14-2.fna&oh=00_AT9ic2SI0GFe3wC_Ej5cokJaKvLQQR0NQytQUnrE1IfX1w&oe=62548EB5"
        }
    ]
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    
    return (
        <>
        {user && 
        <div className="dashboard">
            <ChatContainer  user={user} />
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>you swiped {lastDirection}</p>:<p />}
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Dashboard;