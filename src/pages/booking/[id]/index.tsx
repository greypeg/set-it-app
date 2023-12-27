import { NextPage } from 'next';
// import { useState } from 'react'
// import { ProgressSteps, NumberedStep, } from "baseui/progress-steps";
// import { Button, SHAPE, KIND, SIZE } from 'baseui/button';
// import { useTheme } from '~/components/layout/theme';
// import { ListItem, ListItemLabel } from "baseui/list";
// import { Accordion, Panel } from "baseui/accordion";
// import { StatefulCalendar } from 'baseui/datepicker';
// import { Avatar } from "baseui/avatar";

// const SpacedButton: React.FC<{children: React.ReactNode}> = (props) => {
//     return (
//         <Button
//             {...props}
//             shape={SHAPE.pill}
//             kind={KIND.secondary}
//             size={SIZE.compact}
//             overrides={{
//                 BaseButton: {
//                     style: ({ $theme }) => ({
//                         marginLeft: $theme.sizing.scale200,
//                         marginRight: $theme.sizing.scale200,
//                         marginTop: $theme.sizing.scale800,
//                     }),
//                 },
//             }}
//         />
//     );
// }


// const dons = {
//     services: {
//         categories: [{
//             id: '123',
//             name: "Κούρεμα | Cut",
//             servicesMenu: [{
//                 name: "Κούρεμα | CUT",
//                 price: "5",
//                 duration: "10",
//                 description: "",
//                 id: '123',
//             },
//             {
//                 name: "SHAVER FADE CUT",
//                 price: "13",
//                 duration: "20",
//                 description: "",
//                 id: '123',
//             },
//             {
//                 name: "RAZOR FADE CUT",
//                 price: "14",
//                 duration: "30",
//                 description: "",
//                 id: '123',
//             }]
//         }]
//     }
// };


const Booking: NextPage = () => {
    // const [current, setCurrent] = useState(0);
    // const [css, theme] = useTheme();

    return (<></>)
    {     /*    <div className="flex flex-col items-center justify-center bg-white text-black">
                    <div className="flex flex-col items-center justify-around gap-12 px-4 py-16 ">
                        <ProgressSteps current={current} overrides={{
                            Root: {
                                style: ({ $theme }) => ({
                                    width: '450px'
                                })
                            }
                        }}>
                            <NumberedStep title="Choose Service">
                                <Accordion
                                    onChange={({ expanded }) => console.log(expanded)}
                                    accordion
                                >
                                    <Panel title="Κούρεμα | Cut">
                                        <ListItem

                                            endEnhancer={() => (
                                                <ListItemLabel>5£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">Κούρεμα | CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">SHAVER FADE CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="30 mins">RAZOR FADE CUT</ListItemLabel>
                                        </ListItem>
                                    </Panel>
                                    <Panel title="Γενειάδα | Beard">  <ListItem

                                        endEnhancer={() => (
                                            <ListItemLabel>5£</ListItemLabel>
                                        )}
                                    >
                                        <ListItemLabel description="20 mins">Κούρεμα | CUT</ListItemLabel>
                                    </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">SHAVER FADE CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="30 mins">RAZOR FADE CUT</ListItemLabel>
                                        </ListItem></Panel>
                                    <Panel title="Ξύρισμα | Shave">
                                        <ListItem

                                            endEnhancer={() => (
                                                <ListItemLabel>5£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">Κούρεμα | CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">SHAVER FADE CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="30 mins">RAZOR FADE CUT</ListItemLabel>
                                        </ListItem>
                                    </Panel>
                                    <Panel title="DON's EXPERIENCE">  <ListItem

                                        endEnhancer={() => (
                                            <ListItemLabel>5£</ListItemLabel>
                                        )}
                                    >
                                        <ListItemLabel description="20 mins">Κούρεμα | CUT</ListItemLabel>
                                    </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="20 mins">SHAVER FADE CUT</ListItemLabel>
                                        </ListItem>
                                        <ListItem
                                            endEnhancer={() => (
                                                <ListItemLabel>14£</ListItemLabel>
                                            )}
                                        >
                                            <ListItemLabel description="30 mins">RAZOR FADE CUT</ListItemLabel>
                                        </ListItem>
                                    </Panel>
                                            </Accordion>*/}
    {/* <SpacedButton onClick={() => setCurrent(1)}>
                            Next
                        </SpacedButton> */}
    {/*</NumberedStep >
                    <NumberedStep title="Choose Provider">
                        <div className={css({ ...theme.typography.ParagraphSmall })}>
                            <ListItem
                                artwork={props => <Avatar name={`Antonis Persinakis`} size={"scale1000"} key={""} />}
                            >
                                <ListItemLabel>Antonis Persinakis</ListItemLabel>
                            </ListItem>
                            <ListItem
                                artwork={props => <Avatar name={`Gregory Papas`} size={"scale1000"} key={""} />}
                            >
                                <ListItemLabel>Gregory Papas</ListItemLabel>
                            </ListItem>
                        </div>
                         <SpacedButton onClick={() => setCurrent(0)}>
                            Previous
                        </SpacedButton> */}
    {/* <SpacedButton onClick={() => setCurrent(2)}>
                            Next
                        </SpacedButton> 
                    </NumberedStep>
                    <NumberedStep title="Date and time">
                        <div className={css({ ...theme.typography.ParagraphSmall })}>
                            <StatefulCalendar
                                onDayClick={({ date }) => alert(date)}
                                // use the 'onChange' prop to pull data from the component into your application state
                                onChange={({ date }) => console.log(date)}
                            />
                        </div>
                         <SpacedButton onClick={() => setCurrent(1)}>
                            Previous
                        </SpacedButton>
                        <SpacedButton disabled>Next</SpacedButton> 
                    </NumberedStep>
                </ProgressSteps >
            </div >
                    </div >*/}
};


export default Booking;