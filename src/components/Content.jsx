import './Content.css';

export default function Content() {
    const data = [
        { id: 1, name: 'John Doe', achievement: 'Juara 1 Lomba Matematika', status: 'Pending' },
        { id: 2, name: 'Jane Smith', achievement: 'Juara 2 Lomba Fisika', status: 'Pending' },
        { id: 3, name: 'Dina', achievement: 'Juara 2 Lomba Pikmi', status: 'Pending' },
    ];

    const handleVerify = (id) => {
        alert(`Prestasi dengan ID ${id} telah diverifikasi.`);
    };

    const handleReject = (id) => {
        alert(`Prestasi dengan ID ${id} telah ditolak.`);
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
                                <button className="btn-verify" onClick={() => handleVerify(item.id)}>Verifikasi</button>
                                <button className="btn-reject" onClick={() => handleReject(item.id)}>Tolak</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
