import { useState } from "react"

const Section = ({ title, description, isVisible, SetIsVisible }) => {
    return (
        <div className="p-2 m-2 border border-black">

            <h2>{title}</h2>
            {
                isVisible ? <button onClick={() => SetIsVisible(false)} className="p-4">Hide</button> : <button onClick={() => SetIsVisible(true)} className="p-4">Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )

}


export const Mujju = () => {
    const [visibleSection, setVisibleSection] = useState("title")
    return (
        <>
            <h1>This is mujju</h1>
            <Section
                title={"this is title"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                isVisible={visibleSection === "title"}
                SetIsVisible={() => setVisibleSection(visibleSection === "title" ? "" : "title")}  //visible === "title" ie vo key yani title k barabar hai to usko empty yani hide krdo ya phir barabar nai hai matlab vo title nai to usko show rhnedo
            />
            <Section
                title={"this is another title"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                isVisible={visibleSection === "AnotherTitle"}
                SetIsVisible={() => setVisibleSection(visibleSection === "AnotherTitle" ? "" : "AnotherTitle")}
            />
            <Section
                title={"this is team"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                isVisible={visibleSection === "team"}
                SetIsVisible={() => setVisibleSection(visibleSection === "team" ? "" : "team")}
            />
        </>
    )
}
