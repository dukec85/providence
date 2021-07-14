import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Christ_Church_Cathedral%2C_Nashville.jpg/800px-Christ_Church_Cathedral%2C_Nashville.jpg" 
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div class="writeFormGroup">
                    <textarea placeholder="Write post..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
