import React, { useState } from "react";
import Nav from "./components/Nav";
import {useCookies} from "react-cookie"
import axios from 'axios'
import {useNavigate} from "react-router-dom" 



function Onboard() {

    const[cookies,setCookie,removeCookie] = useCookies(["user"])

    const [formdata, setFormdata] = useState({
        user_id:cookies.UserId, 
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity:"man",
        gender_intrest: "woman",
       
        url: "",
        about: "",
        matches: []

    })

    let navigate = useNavigate()

    const handlesubmit = async(e) => {
        console.log("submitted")
        e.preventDefault()
        try {
            const responce = await axios.put('http://localhost:8000/user',{formdata}) 
            const success = responce.status === 200
            if(success) navigate('/Dashboard')
        }catch(err){
            console.log(err)
        }
    }

    const handlechange = (e) => {
     
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        console.log("value" + value + "name" + name)

        setFormdata((prevState) => ({
            ...prevState,
            [name]: value

        }))

    }

    //console.log(formdata)

    return (
        <>
            <Nav
                minimal={true}
                setshowmodel={() => { }}
                showmodel={false}
            />
            <div className="onboard">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handlesubmit}>
                    <section>
                        <label htmlFor="first_name">First name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="first_name"
                            required={true}
                            value={formdata.first_name}
                            onChange={handlechange}
                        />
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formdata.dob_day}
                                onChange={handlechange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formdata.dob_month}
                                onChange={handlechange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YY"
                                required={true}
                                value={formdata.dob_year}
                                onChange={handlechange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="men-gender-identity"
                                type="radio"
                                name="gender-identity"

                                value="man"
                                onChange={handlechange}
                                checked={formdata.gender_identity === "man"}
                            />
                            <label htmlFor="men-gender-identity">man</label>
                            <input
                                id="women-gender-identity"
                                type="radio"
                                name="gender-identity"
                                value="woman"
                                onChange={handlechange}
                                checked={formdata.gender_identity === "woman"}
                            />
                            <label htmlFor="women-gender-identity">woman</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender-identity"
                                value="more"
                                onChange={handlechange}
                                checked={formdata.gender_identity === "more"}
                            />
                            <label htmlFor="more-gender-identity">more</label>

                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show-gender"
                            onChange={handlechange}
                            checked={formdata.show_gender}
                        />

                        <label>show me</label>
                        <div className="multiple-input-container">
                            <input
                                id="men-gender-intrest"
                                type="radio"
                                name="gender-intrest"

                                value="man"
                                onChange={handlechange}
                                checked={formdata.gender_intrest === "man"}
                            />
                            <label htmlFor="men-gender-intrest">man</label>
                            <input
                                id="women-gender-intrest"
                                type="radio"
                                name="gender-intrest"
                                value="woman"
                                onChange={handlechange}
                                checked={formdata.gender_intrest === "woman"}
                            />
                            <label htmlFor="women-gender-intrest">woman</label>
                            <input
                                id="everyone-gender-intrest"
                                type="radio"
                                name="gender-intrest"
                                value="more"
                                onChange={handlechange}
                                checked={formdata.gender_intrest === "everyone"}
                            />
                            <label htmlFor="everyone-gender-intrest">Everyone</label>

                        </div>

                        <label htmlFor="about-me">About Me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like playing cricket"
                            value={formdata.about}
                            onChange={handlechange}
                        />

                        <input type="submit" />

                    </section>

                    <section>
                        <label htmlFor="url">profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handlechange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formdata.url && <img src={formdata.url} alt="profile pic" />}
                        </div>
                    </section>

                </form>

            </div>
        </>
    )
}

export default Onboard