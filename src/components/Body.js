import { StoreCard, ShimmerStoreCard } from "../cards/StoreCard"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import userContext from "../utils/userContext"


const Body = () => {
    const [searchText, setSearchText] = useState("") //react useState variable

    const [allStoreLists, setAllStoreLists] = useState([])

    const [filteredStoreLists, setFilteredStoreLists] = useState([])

    const { user, setUser } = useContext(userContext)

    useEffect(() => {
        getStores()
    }, []);

    async function getStores() {
        try {
            const data = await fetch("https://fakestoreapi.com/products")
            const json = await data.json()
            // console.log(json);
            setAllStoreLists(json)
            setFilteredStoreLists(json)

        } catch (error) {

            const err = error.message
            console.log(err);
        }

    }

    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>Oops!! looks like you are offline</h1>
    }

    function filterData(searchText, allStoreLists) {
        const filteredData = allStoreLists?.filter((stores) => stores?.title?.toLowerCase()?.includes(searchText.toLowerCase()))
        return filteredData
    }

    const handleSearch = (e) => {
        const newText = e.target.value
        setSearchText(newText)
    }


    return (
        <>
            <div className="">

                <div className="my-3 bg-amber-200 ">
                    <input type="text" placeholder="Search" data-testid="searchInput" name="Search" value={searchText} className="p-2 m-2" onChange={handleSearch} />

                    <button onClick={
                        () => {
                            const data = filterData(searchText, allStoreLists)
                            setFilteredStoreLists(data)
                        }
                    } className="px-3 py-1 font-bold text-white bg-black rounded-md">Search </button>

                    <input type="text" value={user.name} onChange={
                        e => setUser({
                            ...user,
                            name: e.target.value,
                        })
                    }></input>
                    
                    <input value={user.email} onChange={
                        e => setUser({
                            ...user,
                            email: e.target.value
                        })
                    }></input>
                </div>


                <div className="flex flex-wrap justify-between">
                    {filteredStoreLists.length === 0
                        ? Array.from({ length: 20 }).map((_, index) => (
                            <ShimmerStoreCard key={index} />
                        ))
                        : filteredStoreLists.map((store) => (
                            <Link to={`/store/${store.id}`} key={store.id}>
                                <StoreCard {...store} />
                            </Link>
                        ))}
                </div>


            </div>
        </>

    )

}


export default Body