const Mapform = () => {
    return (
        <div className="card mb-4 rounded-3 shadow-sm" >
            <div className="card-header py-3 text-black">
                <h4 className="my-0 fw-normal">Look up your journey</h4>
            </div>

            <div className="row px-5 pt-3">
                <form className="form-group" id="map-form" onSubmit="return false;">
                    <div className="row">
                        <input id="start" className="search_box mb-2"
                               value="Amsterdam Centraal, Stationsplein, Amsterdam, Nederland"/>

                        <input id="end" value="Haarlem, Nederland" className="search_box mb-2"/>

                        <button className="btn btn-primary" id="map-button" onClick="calcRoute()">search</button>

                    </div>
                </form>
            </div>
            <div className="row px-5 pt-3 pb-3">
                <div id="map" className="w-95"></div>
            </div>
        </div>
    )
}
export default Mapform;
