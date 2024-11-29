export function Entry( {imgSrc, imgAlt, country, googleMaps, title, dates, text} ) {
    return (
    <article className="container">
        <div className="entryCard">
            <img className="entryImage" src={imgSrc} alt={imgAlt}/>
            <div className="entryContents">
                <div className="locationText">
                    <p>{country} <a href={googleMaps}>View on Google Maps</a></p>
                <h2>{title}</h2>
                </div>
                <div className="locationContent">
                    <p className="locationDate">{dates}</p>
                    <p className="locationContentText">{text}</p>
                </div>
            </div>
        </div>
    </article>
    )
}