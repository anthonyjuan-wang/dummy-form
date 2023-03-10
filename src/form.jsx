
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import './form.css'
export default function DummyForm () {
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [frozenBeverage, setFrozenBeverage] = useState('');
    const [javaTemperature, setJavaTemperature] = useState('');
    const [baseTemperature, setBaseTemperature] = useState('');
    const [dairyTemp, setDairyTemp] = useState('');
    const [submit, setSubmit] = useState(false);
    const [fridge1Temp, setFridge1Temps] = useState('');
    const [fridge2Temp, setFridge2Temps] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleJavaTempChange = (e) => {
        setJavaTemperature(e.target.value);
    };

    const handleBaseChange = (e) => {
        setBaseTemperature(e.target.value);
    };

    const handleDairyTempChange = (e) => {
        setDairyTemp(e.target.value);
    };

    const handleFridge1TempChange = (e) => {
        setFridge1Temps(e.target.value);
    };

    const handleFridge2TempChange = (e) => {
        setFridge2Temps(e.target.value);
    };


    function Results () {
        return(
            <div className="diva">
                <List>
                    <ListItem>
                    Location: {location} 
                    </ListItem>
                    <ListItem>
                    name: {name}
                    </ListItem>
                    <ListItem>
                    fridge1temperature: {fridge1Temp}
                    </ListItem>
                    <ListItem>
                    fridge2temperature: {fridge2Temp}
                    </ListItem>
                    <ListItem>
                    frozenBeverage: {frozenBeverage}
                    </ListItem>
                    <ListItem>
                    javaTemperature: {javaTemperature}
                    </ListItem>
                    <ListItem>
                    baseTemperature: {baseTemperature}
                    </ListItem>
                    <ListItem>
                    dairyTemp: {dairyTemp}
                    </ListItem>
                </List>
            </div>
        );
    }

    return (
        <div>
            {submit? <Results/> :
            <Card className="card">
            <div>
                <div>
                    <div className="field_title">
                        <h1> 
                            Location
                        </h1>
                        <TextField
                            value={location}
                            onChange={handleLocationChange}
                            className="textfield"
                            id="location"
                            required
                            label="location"
                         />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="field_title">
                        <h1>
                            Name
                        </h1>
                        <TextField
                            value={name}
                            onChange={handleNameChange}
                            className="textfield"
                            id="name"
                            required
                            label="name"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1> 
                    Freezers 
                </h1>
            
                    {/* freezer list */}
            </div>
            <div>
                <div>
                    <div className="sensor_temperature_name">
                        <h1>  
                            Refrigeration
                        </h1>
                        <TextField
                            value={fridge1Temp}
                            onChange={handleFridge1TempChange}
                            className="textfield"
                            id="fridgeid1"
                            required
                            label="Temperature"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="sensor_temperature_name">
                        <TextField
                            value={fridge2Temp}
                            onChange={handleFridge2TempChange}
                            className="textfield"
                            id="fridgeid2"
                            required
                            label="Temperature"
                        />
                    </div>
                </div>
            </div>
            <div>  
                <div>
                    <div className="field_title">
                        <h1>
                            Cold Beverage Equipment
                        </h1>
                        <TextField
                            value={javaTemperature}
                            onChange={handleJavaTempChange}
                            className="textfield"
                            id="javamix"
                            required
                            label="Java Mix Temperature"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="field_title">
                        <TextField
                            value={baseTemperature}
                            onChange={handleBaseChange}
                            className="textfield"
                            id="neutralbase"
                            required
                            label="Base Temperature"
                        />
                        <Button
                            id="frozen-beverage-yes"
                            onClick={(e) => {setFrozenBeverage('yes')}}
                        >
                            Yes
                        </Button>
                        <Button
                            id="frozen-beverage-no"
                            onClick={(e) => {setFrozenBeverage('no')}}
                            >
                            No
                        </Button>
                    </div>    
                </div>
            </div>
            <div>
                <div>
                    <div className="sensor_temperature_name">
                        <h1>
                            Dairy Dispensers
                        </h1>
                        <TextField
                            value={dairyTemp}
                            onChange={handleDairyTempChange}
                            className="textfield"
                            id="dairy-dispensers-frontcounter-1"
                            label="Temperature"
                            required
                        />
                    </div>
                </div>
            </div>
            <Button
                id="form-submit"
                onClick={(e) => {setSubmit(true)}}
                type="submit"
                variant="contained"
            >
                Submit
            </Button>
        </Card> }
        </div>
    );
} 