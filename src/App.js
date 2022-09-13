import React, {useState} from 'react';
import './App.css';


function App() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [zipCode, setZipCode] = useState ("");
    const [deliveryFrequency, toggleDeliveryFrequency] = useState("");
    const [morning, toggleMorning] = useState("");
    const [day, toggleDay] = useState("");
    const [evening, toggleEvening] = useState("");
    const [comment, setComment] = useState(" ");
    const [agreeTerms, setAgreeTerms] = useState(false);


    function resetCounters() {
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }
    


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Voornaam: ${firstName}
        Achternaam: ${lastName}
        Leeftijd: ${age}
        Postcode: ${zipCode}
        Bezorgfrequentie: ${deliveryFrequency}
        Dagdeel: ${morning} ${day} ${evening}
        Comment: ${comment}
        Terms: ${agreeTerms}
        
        
        `);

        console.log(`
        Bananen aantal: ${bananaCounter}
        Aardbeien aantal: ${strawberryCounter}
        Appels aantal: ${appleCounter}
        Kiwi's aantal: ${kiwiCounter}
        
        `);
    }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <article className="fruit">
            <h2>Bananen</h2>
            <button
                type="button"
                disabled={bananaCounter <= 0}
                onClick={() => setBananaCounter(bananaCounter - 1)}
            >-
            </button>

            <p>{bananaCounter}</p>

            <button
                type="button"
                onClick={() => setBananaCounter(bananaCounter + 1)}
            >+
            </button>

        </article>


        <article className="fruit">
            <h2>Aardbeien</h2>
            <button
                type="button"
                disabled={strawberryCounter <= 0}
                onClick={() => setStrawberryCounter(strawberryCounter - 1)}
            >-
            </button>
            <p>{strawberryCounter}</p>
            <button
                type="button"
                onClick={() => setStrawberryCounter(strawberryCounter + 1)}
            >+
            </button>

        </article>




        <article className="fruit">
            <h2>Appels</h2>
            <button
                type="button"
                disabled={appleCounter <= 0}
                onClick={() => setAppleCounter(appleCounter -1)}
            >-
            </button>

            <p>{appleCounter}</p>

            <button
                type="button"
                onClick={() => setAppleCounter(appleCounter + 1)}
            >+
            </button>
        </article>


        <article className="fruit">
            <h2>Kiwi's</h2>
            <button
                type="button"
                disabled={kiwiCounter <= 0}
                onClick={() => setKiwiCounter(kiwiCounter - 1)}
            >-
            </button>
            <p>{kiwiCounter}</p>
            <button
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter + 1)}
            >+
            </button>
        </article>

        <button
            className="reset_send"
            type="button"
            onClick={() => resetCounters()}

        > RESET
        </button>

        <form
            onSubmit={handleSubmit}
            className="userInformation"
        >
            <label
                htmlFor="firstname-field"
            >Voornaam
                <input
                    id="firstname-field"
                    type="text"
                    name="firstname"
                    placeholder="Fruiticious"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>


            <label
                htmlFor="lastname-field"
            >Achternaam
                <input
                    id="lastname-field"
                    type="text"
                    name="lastname"
                    placeholder="Delicious"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>


            <label
                htmlFor="age-field"
            >Leeftijd
                <input
                    id="age-field"
                    type="number"
                    name="age"
                    placeholder="40"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>


            <label
                htmlFor="zipcode-field"
            >Postcode
                <input
                    id="zipcode-field"
                    type="text"
                    name="zipcode"
                    placeholder="1234TC"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
            </label>


            <label
                htmlFor="frequency-field"
            >Choose delivery frequency
                <select
                    id="frequency-field"
                    name="frequency"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                    <option value="weekly">Once a week</option>
                    <option value="every-two-weeks">Every two weeks</option>
                    <option value="monthly">Once a month</option>
                </select>
            </label>



            <label
                htmlFor="morning-field"
            >Morning delivery
                <input
                    id="morning-field"
                    type="radio"
                    name="time"
                    value={morning}
                    onChange={() => toggleMorning("morning")}
                />
            </label>

            <label
                htmlFor="daytime-field"
            >Daytime delivery
                <input
                    id="daytime-field"
                    type="radio"
                    name="time"
                    value={day}
                    onChange={() => toggleDay("day")}
                />
            </label>


            <label
                htmlFor="evening-field"
            >Evening delivery
                <input
                    id="evening-field"
                    type="radio"
                    name="time"
                    value={evening}
                    onChange={() => toggleEvening("evening")}
                />
            </label>



            <label
                htmlFor="comment-field"
            >Leave your comment
                <input
                    id="comment-field"
                    type="textarea"
                    placeholder="Say Hi!"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>


            <label
                htmlFor="termsAgree-field"
            >Agree with the terms
                <input
                    id="termsAgree-field"
                    type="checkbox"
                    name="agree-with-the-terms"
                    value={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                />
            </label>






            <button
                className="reset_send"
                type="submit"
                disabled={agreeTerms === false}

            >SEND
            </button>

        </form>




    </>
  )
}

export default App;
