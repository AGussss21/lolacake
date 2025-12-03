-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Nov 2025 pada 12.35
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lolacake_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `created_at`) VALUES
(2, 'Strawberry Shortcake', 'Kue lembut dengan krim vanilla dan stroberi segar.', 30000.00, 'strawberry-shortcake.jpg', '2025-11-11 02:04:06'),
(3, 'Tiramisu', 'Kue kopi khas Italia dengan krim mascarpone lembut.', 35000.00, 'tiramisu.jpg', '2025-11-11 02:04:06'),
(4, 'Red Velvet Cake', 'Kue red velvet dengan lapisan cream cheese lembut.', 32000.00, 'red-velvet.jpg', '2025-11-11 02:04:06'),
(5, 'Brownies Premium', 'Brownies cokelat lembut dengan topping kacang almond', 35000.00, 'brownies.jpg', '2025-11-11 04:06:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `message`, `rating`, `created_at`) VALUES
(1, 'agus setiawan', 'enak sekali', 5, '2025-11-17 14:43:48'),
(3, 'anton', 'mantapnyo', 5, '2025-11-17 14:44:10'),
(5, 'wildan', 'endul', 5, '2025-11-17 14:45:38'),
(6, 'agus', 'pahit', 1, '2025-11-17 14:45:50'),
(7, 'anton', 'pahit', 3, '2025-11-17 14:56:26'),
(8, 'sdasdsa', 'asdsada', 5, '2025-11-17 16:09:17'),
(9, 'sdasadas', 'sadasdasd', 5, '2025-11-17 18:21:41'),
(10, 'sdasdas', 'asdasdas', 5, '2025-11-18 08:13:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','customer') DEFAULT 'customer',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_verified` tinyint(1) DEFAULT 0,
  `verification_token` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expires` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `created_at`, `is_verified`, `verification_token`, `reset_token`, `reset_token_expires`) VALUES
(5, 'agus2', 'agus2@example.com', '$2b$10$/uSc31RF.JgjMxpKuPIeBeB6DSbkB8Mpc1t6BKhE3sjQ41s/0d3ZC', 'customer', '2025-11-11 03:08:20', 0, NULL, NULL, NULL),
(9, 'admin', 'admin@example.com', '$2b$10$NWflZxeOUrViCg6tuBc1nezbE0zFzpSwrcg18WIMK/3Y9OYkGFTtu', 'admin', '2025-11-11 03:57:30', 0, NULL, NULL, NULL),
(10, 'agus', 'agus3@example.com', '$2b$10$qrMaP3uQy/fP4tysNuwdPeYNlt8/QEs9soAvzUajNfP/tfIEWbDea', 'customer', '2025-11-12 16:34:07', 0, '1052467c116ebc48a787b89531edd968014654f6ae45c892b2121a93fc97ae91', NULL, NULL),
(11, 'agus', 'agus.22153@mhs.unesa.ac.id', '$2b$10$1kNhjAhn3eFSMHjFC/Td0.5FCXN/23R2dJQjYxgOMbP0CbLMED.02', 'customer', '2025-11-12 16:34:43', 0, '13efc664fba5a11638f7f701fc31edc32f891800acdb911d15ad5a969d7262c4', NULL, NULL),
(39, 'noren', 'noren4039@gmail.com', '$2b$10$zpgc5iCliH2UrapktVsw9.AjbQ27tQccIgm9brWyHF./U7aPB.CdK', 'customer', '2025-11-17 16:31:05', 1, NULL, '70c27417b9816977a013498b025b66e29a13817706e9a5fa816fcaf84282eccaf5ebecbca94533ff', '2025-11-18 02:17:13');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
