// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // (Simulasi Database) Daftar ID siswa yang dianggap valid.
    // Di aplikasi nyata, data ini akan diambil dari server/database.
    const validStudentIDs = ['12345', '67890', '11223', '44556', '98765'];

    // Mengambil elemen HTML yang kita butuhkan
    const form = document.getElementById('attendance-form');
    const studentIdInput = document.getElementById('student-id');
    const messageContainer = document.getElementById('message-container');

    // Menambahkan 'event listener' saat form disubmit (tombol ditekan)
    form.addEventListener('submit', (event) => {
        // Mencegah form mengirim data dan me-refresh halaman (perilaku default)
        event.preventDefault();

        // 1. Mengambil nilai ID yang diinput oleh pengguna
        const enteredId = studentIdInput.value.trim(); // .trim() untuk menghapus spasi di awal/akhir

        // Mengosongkan pesan sebelumnya
        messageContainer.innerHTML = '';
        messageContainer.className = '';

        // 2. Verifikasi Identitas
        if (validStudentIDs.includes(enteredId)) {
            // JIKA VALID (YA)
            const now = new Date();
            const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            const date = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            
            // 3. Catat Waktu Masuk & Tampilkan Notifikasi Berhasil
            const successMessage = `
                <strong>Absensi Berhasil!</strong><br>
                ID Siswa: ${enteredId}<br>
                Waktu: ${time} - ${date}
            `;
            displayMessage(successMessage, 'success');
            
            // Mengosongkan kolom input setelah berhasil
            studentIdInput.value = '';

        } else {
            // JIKA TIDAK VALID (TIDAK)
            
            // 4. Tampilkan Pesan Gagal & Hubungi Guru
            const errorMessage = `
                <strong>ID Siswa tidak ditemukan!</strong><br>
                Pastikan ID Anda benar atau hubungi guru Anda untuk bantuan.
            `;
            displayMessage(errorMessage, 'error');
        }
    });

    // Fungsi bantuan untuk menampilkan pesan
    function displayMessage(message, type) {
        messageContainer.innerHTML = message;
        messageContainer.classList.add(type); // Menambahkan kelas 'success' atau 'error'
    }
});
