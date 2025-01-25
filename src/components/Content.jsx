import './Content.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Content() {
    const [selectedPrestasi, setSelectedPrestasi] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [poin, setPoin] = useState(0);
    const navigate = useNavigate();

    const data = [
        { id: 1, name: 'John Doe', achievement: 'Juara 1 Lomba Matematika', status: 'Pending', bukti: "https://drive.google.com/link_to_bukti1", },
        { id: 2, name: 'Jane Smith', achievement: 'Juara 2 Lomba Fisika', status: 'Pending', bukti: "https://drive.google.com/link_to_bukti2", },
        { id: 3, name: 'Dina', achievement: 'Juara 2 Lomba Pikmi', status: 'Pending', bukti: "https://drive.google.com/link_to_bukti3", },
    ];

    const handleVerify = (prestasi) => {
        setSelectedPrestasi(prestasi);
        setShowPopup(true);
    };

    const handleReject = (prestasi) => {
        setSelectedPrestasi(prestasi);
        setShowPopup(true);
    };

    const handleSubmit = (action) => {
        if (action === "verify") {
            alert(`Prestasi "${selectedPrestasi.achievement}" telah diverifikasi dengan poin: ${poin}`);
        } else if (action === "reject") {
            alert(`Prestasi "${selectedPrestasi.achievement}" telah ditolak.`);
        }
        setShowPopup(false); 
        setPoin(0); 
        setSelectedPrestasi(null); 
        navigate("/history");
    };

    return (
        <main className="content">
            <h2>Prestasi Siswa</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Prestasi</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.achievement}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="btn-verify" onClick={() => handleVerify(item)}>Verifikasi</button>
                                <button className="btn-reject" onClick={() => handleReject(item)}>Tolak</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pop-Up */}
            {showPopup && (
                <div className="popup">
                    <h2>
                        {selectedPrestasi.name} - {selectedPrestasi.achievement}
                    </h2>
                    <p>
                        Bukti: <a href={selectedPrestasi.bukti} target="_blank" rel="noopener noreferrer">Lihat Bukti</a>
                    </p>
                    <label>
                        Masukkan Poin:
                        <input
                            type="number"
                            value={poin}
                            min="0"
                            max="1500"
                            onChange={(e) => setPoin(e.target.value)}
                        />
                    </label>
                    <button onClick={() => handleSubmit("verify")}>Yakin Verifikasi</button>
                    <button onClick={() => handleSubmit("reject")}>Tolak</button>
                    <button onClick={() => setShowPopup(false)}>Batal</button>
                </div>
            )}

        </main>
    );
}
