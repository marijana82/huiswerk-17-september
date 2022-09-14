import React, {useState} from 'react';
import './App.css';
import Labels from "./components/Labels";
import Buttons from "./components/Buttons";
import CounterButtons from "./components/CounterButtons";
import LabelsChildren from "./components/LabelsChildren";


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


            <CounterButtons
                titleFruitName="Bananen"
                stateFruitName={bananaCounter}
                stateFruitSetterFunctionMin={setBananaCounter}
                buttonLabelMin="-"
                totalNumberOfFruit={bananaCounter}
                stateFruitSetterFunctionPlus={setBananaCounter}
                buttonLabelPlus="+"
            />


        <CounterButtons
            titleFruitName="Aardbeien"
            stateFruitName={strawberryCounter}
            stateFruitSetterFunctionMin={setStrawberryCounter}
            buttonLabelMin="-"
            totalNumberOfFruit={strawberryCounter}
            stateFruitSetterFunctionPlus={setStrawberryCounter}
            buttonLabelPlus="+"
        />

        <CounterButtons
            titleFruitName="Appels"
            stateFruitName={appleCounter}
            stateFruitSetterFunctionMin={setAppleCounter}
            buttonLabelMin="-"
            totalNumberOfFruit={appleCounter}
            stateFruitSetterFunctionPlus={setAppleCounter}
            buttonLabelPlus="+"
        />


        <CounterButtons
            titleFruitName="Kiwi's"
            stateFruitName={kiwiCounter}
            stateFruitSetterFunctionMin={setKiwiCounter}
            buttonLabelMin="-"
            totalNumberOfFruit={kiwiCounter}
            stateFruitSetterFunctionPlus={setKiwiCounter}
            buttonLabelPlus="+"
        />

        <Buttons
            className="reset_send"
            type="button"
            clickHandler={resetCounters}
            textButton="Reset"
        />


        <form
            onSubmit={handleSubmit}
            className="userInformation"
        >

            <Labels
                htmlFor="firstname-field"
                id="firstname-field"
                type="text"
                textLabel="Voornaam"
                inputFieldPlaceholder={firstName}
                name={firstName}
                stateValue={firstName}
                stateSetterFunction={(e) => setFirstName(e.target.value)}
            />


            <Labels
                htmlFor="lastname-field"
                id="lastname-field"
                type="text"
                textLabel="Achternaam"
                inputFieldPlaceholder={lastName}
                name={lastName}
                stateValue={lastName}
                stateSetterFunction={(e) => setLastName(e.target.value)}
            />

            <Labels
                htmlFor="age-field"
                id="age-field"
                type="number"
                textLabel="Leeftijd"
                inputFieldPlaceholder={age}
                name={age}
                stateValue={age}
                stateSetterFunction={(e) => setAge(e.target.value)}
            />

            <Labels
                htmlFor="zipcode-field"
                id="zipcode-field"
                type="text"
                textLabel="Postcode"
                inputFieldPlaceholder={zipCode}
                name={zipCode}
                stateValue={zipCode}
                stateSetterFunction={(e) => setZipCode(e.target.value)}
            />



            <LabelsChildren
                htmlFor="frequency-field"
                title="Choose delivery frequency"
            >
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
            </LabelsChildren>



            <LabelsChildren
                htmlFor="morning-field"
                title="Morning delivery"
            >
                <input
                    id="morning-field"
                    type="radio"
                    name="time"
                    value={morning}
                    onChange={() => toggleMorning("morning")}
                />
            </LabelsChildren>

            <LabelsChildren
                htmlFor="daytime-field"
                title="Daytime delivery"
            >
                <input
                    id="daytime-field"
                    type="radio"
                    name="time"
                    value={day}
                    onChange={() => toggleDay("day")}
                />
            </LabelsChildren>


            <LabelsChildren
                htmlFor="evening-field"
                title="Evening delivery"
            >
                <input
                    id="evening-field"
                    type="radio"
                    name="time"
                    value={evening}
                    onChange={() => toggleEvening("evening")}
                />
            </LabelsChildren>


            <Labels
                htmlFor="comment-field"
                id="comment-field"
                type="textarea"
                textLabel="Comment"
                inputFieldPlaceholder={comment}
                name={comment}
                stateValue={comment}
                stateSetterFunction={(e) => setComment(e.target.value)}
            />



            <LabelsChildren
                htmlFor="termsAgree-field"
                title="Agree with the terms"
            >
                <input
                    id="termsAgree-field"
                    type="checkbox"
                    name="agree-with-the-terms"
                    value={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                />
            </LabelsChildren>


<Buttons
    textButton="SEND"
    disableButton={agreeTerms === false}
    typeButton="submit"
    stateTermsAgree={agreeTerms}

/>


        </form>




    </>
  )
}

export default App;
