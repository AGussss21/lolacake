-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2025 at 01:35 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

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
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `created_at`) VALUES
(2, 'Strawberry Shortcake', 'Kue lembut dengan krim vanilla dan stroberi segar.', '30000.00', 'strawberry-shortcake.jpg', '2025-11-11 02:04:06'),
(3, 'Tiramisu', 'Kue kopi khas Italia dengan krim mascarpone lembut.', '35000.00', 'tiramisu.jpg', '2025-11-11 02:04:06'),
(4, 'Red Velvet Cake', 'Kue red velvet dengan lapisan cream cheese lembut.', '32000.00', 'red-velvet.jpg', '2025-11-11 02:04:06'),
(5, 'Brownies Premium', 'Brownies cokelat lembut dengan topping kacang almond', '35000.00', 'brownies.jpg', '2025-11-11 04:06:56');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `message` text COLLATE utf8mb4_general_ci NOT NULL,
  `rating` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `products_id` int DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` enum('admin','customer') COLLATE utf8mb4_general_ci DEFAULT 'customer',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_verified` tinyint(1) DEFAULT '0',
  `verification_token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `reset_token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `reset_token_expires` datetime DEFAULT NULL,
  `profile_photo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `phone`, `password`, `role`, `created_at`, `is_verified`, `verification_token`, `reset_token`, `reset_token_expires`, `profile_photo`) VALUES
(5, '', 'agus2', 'agus2@example.com', NULL, '$2b$10$/uSc31RF.JgjMxpKuPIeBeB6DSbkB8Mpc1t6BKhE3sjQ41s/0d3ZC', 'customer', '2025-11-11 03:08:20', 0, NULL, NULL, NULL, NULL),
(9, '', 'admin', 'admin@example.com', NULL, '$2b$10$NWflZxeOUrViCg6tuBc1nezbE0zFzpSwrcg18WIMK/3Y9OYkGFTtu', 'admin', '2025-11-11 03:57:30', 0, NULL, NULL, NULL, NULL),
(10, '', 'agus', 'agus3@example.com', NULL, '$2b$10$qrMaP3uQy/fP4tysNuwdPeYNlt8/QEs9soAvzUajNfP/tfIEWbDea', 'customer', '2025-11-12 16:34:07', 0, '1052467c116ebc48a787b89531edd968014654f6ae45c892b2121a93fc97ae91', NULL, NULL, NULL),
(11, '', 'agus', 'agus.22153@mhs.unesa.ac.id', NULL, '$2b$10$1kNhjAhn3eFSMHjFC/Td0.5FCXN/23R2dJQjYxgOMbP0CbLMED.02', 'customer', '2025-11-12 16:34:43', 0, '13efc664fba5a11638f7f701fc31edc32f891800acdb911d15ad5a969d7262c4', NULL, NULL, NULL),
(39, '', 'noren', 'noren4039@gmail.com', NULL, '$2b$10$zpgc5iCliH2UrapktVsw9.AjbQ27tQccIgm9brWyHF./U7aPB.CdK', 'customer', '2025-11-17 16:31:05', 1, NULL, '70c27417b9816977a013498b025b66e29a13817706e9a5fa816fcaf84282eccaf5ebecbca94533ff', '2025-11-18 02:17:13', NULL),
(40, '', 'ara', 'mutiaranurzarima@gmail.com', NULL, '$2b$10$Q.LtTXQRPZKb0Kipt7cvTOp0sZSr.m3G1qwDL0koOG7qz44p91Yha', 'customer', '2025-12-02 19:04:15', 1, NULL, NULL, NULL, NULL),
(43, '', 'superadmin', 'admin@lolacake.com', NULL, '$2b$10$6eQSCuYus74e9lUNXGbJvetSubRQH.OBb78p/7VMgnSpxFeg8yM5W', 'admin', '2025-12-03 11:54:08', 1, NULL, NULL, NULL, NULL),
(44, 'mutiara', 'ara2', 'aracannss@gmail.com', '081231930522', '$2b$10$TtxBeZmObYdRoWR6eeAzVOiH7Cwf70BC3ByCi47qo22XwBQAX6Nta', 'customer', '2025-12-03 13:03:41', 1, NULL, NULL, NULL, '/uploads/profile/user_44.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_testimonials_products` (`products_id`),
  ADD KEY `fk_testimonials_users` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD CONSTRAINT `fk_testimonials_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_testimonials_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
