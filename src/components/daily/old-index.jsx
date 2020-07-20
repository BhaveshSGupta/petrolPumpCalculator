import React, { useState } from 'react';
import useCustomForm from '.'
const initialValues = {
    "MS": "",
    "HSD": "",
    "MS_DIP": "",
    "HSD_DIP1": "",
    "HSD_DIP2": "",
    "Closing_Reading_MS_Dispenser_1_Nozle_1": "",
    "Closing_Reading_MS_Dispenser_1_Nozle_2": "",
    "Testing_MS_Dispenser_1_Nozle_1": "15",
    "Testing_MS_Dispenser_1_Nozle_2": "15",
    "Closing_Reading_HSD_Dispenser_1_Nozle_1": "",
    "Closing_Reading_HSD_Dispenser_1_Nozle_2": "",
    "Closing_Reading_HSD_Dispenser_2_Nozle_1": "",
    "Closing_Reading_HSD_Dispenser_2_Nozle_2": "",
    "Closing_Reading_HSD_Dispenser_3_Nozle_1": "",
    "Closing_Reading_HSD_Dispenser_3_Nozle_2": "",
    "Testing_HSD_Dispenser_1_Nozle_1": "15",
    "Testing_HSD_Dispenser_1_Nozle_2": "15",
    "Testing_HSD_Dispenser_2_Nozle_1": "15",
    "Testing_HSD_Dispenser_2_Nozle_2": "15",
    "Testing_HSD_Dispenser_3_Nozle_1": "15",
    "Testing_HSD_Dispenser_3_Nozle_2": "15"
};
const Daily = () => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useCustomForm({
        initialValues,
        onSubmit: values => console.log({ values })
    });
    return (
        <form onSubmit={handleSubmit} className="App">
        

            <label>Name</label>
            <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                error={errors.name}
            />
            <br />

            <label>Lastname</label>
            <input
                type="text"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                onBlur={handleBlur}
            />
            <br />

            <label>Age</label>
            <input
                type="number"
                name="age"
                onChange={handleChange}
                value={values.age}
                required
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Daily;
