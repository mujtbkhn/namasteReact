export const Dev = () => {
    return (
        <>
            <h1 className="p-10 m-5 text-3xl font-bold text-center">This is dev</h1>
            <div className="flex flex-col items-center p-5 m-5">
                <input type="text" className="px-10 py-2 m-5" placeholder="name" />
                <input type="text" className="px-10 py-2 m-5" placeholder="email" />
                <button className="p-4 m-2 text-white bg-black rounded-xl">Submit</button>
            </div>
        </>
    )
}
