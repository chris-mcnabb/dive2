import styles from '../../styles/admin/Dates.module.css'
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

const Dates = () => {
    const [value, setValue] = useState(new Date());
    return(
        <div className={styles.container}>
            <Calendar
                fullWidth
                fullHeight

                size='xl'
                styles={{
                    cell: {border: '0.5px solid lightslategray', color: '#1980b5'},
                    day: {height: 120, display: 'inline-flex', fontSize: 'small', borderRadius: 0,
                    justifyContent: 'flex-end', fontWeight: 'bold', color: '#1980b5', top: '0 !important'},
                    weekend: { color: '#1980b5 !important' },
                    calendarHeader: { color: '#1980b5' },
                    calendarHeaderControl: {color: '#1980b5' },
                    calendarHeaderLevel: { color: '#1980b5', fontWeight: 'bold', fontSize: 30 },
                    calendarHeaderLevelIcon: { color: '#1980b5', fontWeight: 'bold' },
                    weekday: {backgroundColor: 'rgba(25,128,181,0.2)',  color: '#1980b5' },
            }}
                value={value}
                onChange={setValue}/>
        </div>

    )
};

export default Dates;

