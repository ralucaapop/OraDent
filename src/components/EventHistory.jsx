import styles from "../css/event_history.module.css";
import lego from "../assets/lego 1.png"
import edition1_img from "../assets/editia1.jpg";
import edition2_img from "../assets/editia2.jpg";
import teeth_icon from "../assets/teeth 1.png";
import conference from "../assets/conference.png";


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


function EventHistory(){
    const circles = [
        { id: 1, size: 60, top: '10%', left: '5%' },
        { id: 2, size: 40, top: '25%', left: '80%' },
        { id: 3, size: 25, top: '60%', left: '20%' },
        { id: 4, size: 50, top: '70%', left: '70%' },
    ];
    return(
        <div className={styles.event_history_container}>
            <div className={styles.circles_wrapper}>
                {circles.map(circle => (
                    <div
                        key={circle.id}
                        className={styles.circle}
                        style={{
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            top: circle.top,
                            left: circle.left,
                        }}
                    />
                ))}
            </div>
            <div className={styles.header_section}>
                <h2 className={styles.event_history_title}>Construim viitorul ediție cu ediție</h2>
                <img className={styles.lego_img} src={lego}/>
            </div>

            <div className={styles.history_messsage_container}>
                <p className={styles.history_message}>Privim înapoi cu mândrie și continuăm cu mai multă pasiune</p>
            </div>

            <div className={styles.editions_container}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        <img className={styles.teeth_icon} src={teeth_icon}/>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                    <TimelineConnector/>
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" className={styles.edition_name}>
                            EDIȚIA I
                        </Typography>
                        <Typography>2023</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>

                    <TimelineOppositeContent>
                        <p className={styles.edition_text}>Prima ediție a fost mai mult decât un eveniment, a fost începutul unei povești</p>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector/>

                        <TimelineConnector/>
                    </TimelineSeparator>

                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <img className={styles.edition1_img} src={edition1_img}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2">
                        <Typography variant="h6" component="span" className={styles.edition_name}>
                            EDIȚIA II
                        </Typography>
                        <Typography>2024</Typography>

                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />

                        <TimelineConnector  />
                    </TimelineSeparator>

                    <TimelineContent >
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        <img className={styles.edition2_img} src={edition2_img} />
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent >
                        <p className={styles.edition_text_2}>
                            Idei inovatoare și momente care ne motivează să continuăm
                        </p>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
            </div>
        </div>
    )
}

export default EventHistory;