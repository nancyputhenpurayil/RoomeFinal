import React, { useRef, useState } from 'react'
import {useCookies} from 'react-cookie'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 

const Onboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const[formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        gender_identity: 'man',
        free_time_1: "",
        show_gender: true,
        gender_interest: 'man',
        email: "",
        url1: "",
        allergies_restrictions: "",
        major: "",
        goes_out: "",
        introvert_extravert: "",
        l_l_P: "",
        out_of_state: "",
        sleep_range: "",
        status: "",
        matches: []

    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }));

    }

    console.log(formData)


    return (
        <>
            <Nav
                setShowModal={() => { }}
                showModal={false}
            />
            <div className='onboarding'>
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Hobbies</label>
                        <div className='multiple-input-container'>
                            <input
                                id="free_time_1"
                                type="text"
                                name="free_time_1"
                                placeholder='Art'
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            
                        </div>


                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                id="nonbinary-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="nonbinary"
                                onChange={handleChange}
                                checked={formData.gender_identity === "nonbinary"}
                            />
                            <label htmlFor="nonbinary-gender-identity">Nonbinary</label>
                        </div>

                        <label htmlFor='show-gender'>Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show-gender"
                            onChange={handleChange}
                            checked={formData.show_gender}

                        />

                        <label htmlFor='show-gender'>Roommate Gender</label>
                        <div className='multiple-input-container'>
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'}
                            />
                            <label htmlFor='man-gender-interest'>Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'}
                            />
                            <label htmlFor='woman-gender-interest'>Woman</label>
                            <input
                                id="nonbinary-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="nonbinary"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'nonbinary'}
                            />
                            <label htmlFor='nonbinary-gender-interest'>Non-binary</label>
                        </div>

                        <label htmlFor='major'>Major</label>

                        <input
                            id="major"
                            type="text"
                            name="major"
                            required={true}
                            placeholder='Computer Science'
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <label htmlFor='allergies_restrictions'>Restrictions/Allergies</label>
                        <input
                            id="allergies_restrictions"
                            type="text"
                            name="allergies_restrictions"
                            required={true}
                            placeholder='Nut allergy'
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <label>How often do you think you will go out?</label>
                        <div className="multiple-input-container">
                            <input
                                id="often"
                                type="radio"
                                name="goes_out"
                                value="often"
                                onChange={handleChange}
                                checked={formData.goes_out === "often"}
                            />
                            <label htmlFor="often">Often</label>
                            <input
                                id="sometimes"
                                type="radio"
                                name="goes_out"
                                value="sometimes"
                                onChange={handleChange}
                                checked={formData.goes_out === "sometimes"}
                            />
                            <label htmlFor="sometimes">Sometimes</label>
                            <input
                                id="never"
                                type="radio"
                                name="goes_out"
                                value="never"
                                onChange={handleChange}
                                checked={formData.goes_out === "never"}
                            />
                            <label htmlFor="never">Never</label>
                        </div>


                        <input type="submit" />
                    </section>

                    <section>

                        <label htmlFor="url1">Profile Photo</label>
                        <input
                            type="url1"
                            name="url1"
                            id="url1"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                        {formData.url && <img scr={formData.url} alt="profile pic preview"/>}
                        </div>


                        <label>Introvert or Extravert?</label>
                        <div className="multiple-input-container">
                            <input
                                id="introvert"
                                type="radio"
                                name="introvert_extravert"
                                value="introvert"
                                onChange={handleChange}
                                checked={formData.introvert_extravert === "introvert"}
                            />
                            <label htmlFor="introvert">Introvert</label>
                            <input
                                id="extravert"
                                type="radio"
                                name="introvert_extravert"
                                value="extravert"
                                onChange={handleChange}
                                checked={formData.introvert_extravert === "extravert"}
                            />
                            <label htmlFor="extravert">Extravert</label>
                        </div>

                        <label>Living-Learning Community</label>
                        <div className="multiple-input-container">
                            <input
                                id="FIRE"
                                type="radio"
                                name="l_l_P"
                                value="FIRE"
                                onChange={handleChange}
                                checked={formData.l_l_P === "FIRE"}
                            />
                            <label htmlFor="FIRE">FIRE</label>
                            <input
                                id="Carillon"
                                type="radio"
                                name="l_l_P"
                                value="Carillon"
                                onChange={handleChange}
                                checked={formData.l_l_P === "Carillon"}
                            />
                            <label htmlFor="Carillon">Carillon</label>
                            <input
                                id="ACES"
                                type="radio"
                                name="l_l_P"
                                value="ACES"
                                onChange={handleChange}
                                checked={formData.l_l_P === "ACES"}
                            />
                            <label htmlFor="ACES">ACES</label>
                            <input
                                id="None"
                                type="radio"
                                name="l_l_P"
                                value="None"
                                onChange={handleChange}
                                checked={formData.l_l_P === "None"}
                            />
                            <label htmlFor="None">None</label>
                        </div>


                        <label>I usually go to sleep from...</label>
                        <div className="multiple-input-container">
                            <input
                                id="before_11pm"
                                type="radio"
                                name="sleep_range"
                                value="before_11pm"
                                onChange={handleChange}
                                checked={formData.sleep_range === "before_11pm"}
                            />
                            <label htmlFor="before_11pm">Before 11pm</label>
                            <input
                                id="11pm-1am"
                                type="radio"
                                name="sleep_range"
                                value="11pm-1am"
                                onChange={handleChange}
                                checked={formData.sleep_range === "11pm-1am"}
                            />
                            <label htmlFor="11pm-1am">11pm-1am</label>
                            <input
                                id="past_1am"
                                type="radio"
                                name="sleep_range"
                                value="past_1am"
                                onChange={handleChange}
                                checked={formData.sleep_range === "past_1am"}
                            />
                            <label htmlFor="past_1am">Past 1am</label>
                        </div>


                        


                        <label>Status</label>
                        <div className="multiple-input-container">
                            <input
                                id="need_roommate"
                                type="radio"
                                name="status"
                                value="need_roommate"
                                onChange={handleChange}
                                checked={formData.status === "need_roommate"}
                            />
                            <label htmlFor="need_roommate">ROOME!</label>
                            <input
                                id="need_tenant"
                                type="radio"
                                name="status"
                                value="need_tenant"
                                onChange={handleChange}
                                checked={formData.status === "need_tenant"}
                            />
                            <label htmlFor="need_tenant">Needs tenant</label>
                            <input
                                id="need_off_campus"
                                type="radio"
                                name="status"
                                value="need_off_campus"
                                onChange={handleChange}
                                checked={formData.status === "need_off_campus"}
                            />
                            <label htmlFor="never-need_off_campus-out">Needs off-campus roommate</label>
                        </div>


                    </section>
                </form>

            </div>
        </>
    )
}
export default Onboarding