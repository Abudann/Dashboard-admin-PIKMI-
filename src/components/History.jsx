import React from "react";
import "./History.css";

function History() {
  const data = [
    { id: 1, nama: "John Doe", prestasi: "Juara 1 Coding", status: "Terverifikasi" },
    { id: 2, nama: "Jane Smith", prestasi: "Juara 3 Matematika", status: "Ditolak" },
  ];

  return (
    <div className="history">
      <h2>Riwayat Prestasi Mahasiswa</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Prestasi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.prestasi}</td>
              <td className={item.status === "Terverifikasi" ? "verified" : "rejected"}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;