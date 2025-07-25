import { FileUploadService } from "../../services/FileUploadService";
import Header from "./Header";
import { styles } from "./styles";
import React from "react";
import { FaUpload } from "react-icons/fa";

export default function HomePage({ user, onSignOut }) {
    const [uploading, setUploading] = React.useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploading(true);
            await FileUploadService.uploadFile(file, user.tokens.idToken.toString());
            setUploading(false);
        }
    };

    return <>
    <Header email={user.email} onSignOut={onSignOut} />
    <div style={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f7fafc 0%, #e9ecef 100%)"
    }}>
        <label
            htmlFor="file-upload"
            style={{
                ...styles.button,
                ...styles.primaryButton,
                fontSize: "1.2rem",
                marginTop: "2rem",
                cursor: uploading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
            }}
            onMouseOver={e => {
                e.target.style.opacity = 0.85;
            }}
            onMouseOut={e => {
                e.target.style.opacity = 1;
            }}
        >
            <FaUpload />
            {uploading ? "Uploading..." : "Upload File"}
            <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                disabled={uploading}
            />
        </label>
    </div>
    </>
}