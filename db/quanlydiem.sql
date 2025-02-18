-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2025 at 10:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlydiem`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `academic_year` varchar(50) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `class_name`, `academic_year`, `teacher_id`, `status`) VALUES
(1, '10A1', '2024-2025', 1, 1),
(2, '10A2', '2024-2025', 1, 1),
(3, '10A3', '2024-2025', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `grade_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `ddgtx1` double DEFAULT NULL,
  `ddgtx2` double DEFAULT NULL,
  `ddgtx3` double DEFAULT NULL,
  `ddgtx4` double DEFAULT NULL,
  `ddg_gk` double DEFAULT NULL,
  `ddg_ck` double DEFAULT NULL,
  `dtb_mhk` double DEFAULT NULL,
  `academic_year` varchar(50) DEFAULT NULL,
  `semester` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`grade_id`, `student_id`, `subject_id`, `class_id`, `ddgtx1`, `ddgtx2`, `ddgtx3`, `ddgtx4`, `ddg_gk`, `ddg_ck`, `dtb_mhk`, `academic_year`, `semester`) VALUES
(1, 1, 1, 1, 8, 7.5, 9, 8.5, 8.5, 8.5, 8.5, '2024-2025', '1'),
(2, 1, 2, 1, 8, 7.5, 9, 8.5, 8, 8.5, 8.2, '2024-2025', '1'),
(3, 1, 3, 1, 8, 7.5, 9, 8.5, 8, 8.5, 8.2, '2024-2025', '1'),
(4, 1, 4, 1, 8, 7.5, 9, 8.5, 8, 8.5, 8.2, '2024-2025', '1'),
(5, 1, 4, 1, 8, 7.5, 9, 8.5, 8, 8.5, 8.2, '2024-2025', '1'),
(6, 2, 1, 1, 8.5, 9, 9, 9, 9, 9, 9, '2024-2025', '1'),
(7, 2, 4, 1, 8, 7.5, 9, 8.5, 8, 8.5, 8.2, '2024-2025', '1'),
(8, 1, 6, 1, 5, 8, 8, 6, 7, 9, 7.6, '2024-2025', '1'),
(9, 2, 6, 1, 8, 8, 8, 8, 8, 8, 8, '2024-2025', '1'),
(10, 4, 6, 1, 8, 8, 8, 8, 8, 8, 8, '2024-2025', '1'),
(11, 2, 2, 1, 8, 7, 8, 9, 7, 8, 7.8, '2024-2025', '1'),
(12, 1, 7, 1, 8, 6, 8, 7, 8, 9, 8, '2024-2025', '1');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `date_of_birth` text DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `hk1` text DEFAULT NULL,
  `hk2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `full_name`, `date_of_birth`, `gender`, `address`, `class_id`, `hk1`, `hk2`) VALUES
(1, 'Nguyễn Văn A', '2008-05-14', 'male', '123 Đường Lê Lợi, Hà Nội', 1, 'Tốt', 'Tốt'),
(2, 'Trần Thị B', '2008-08-20', 'female', '456 Đường Trần Phú, Hà Nội', 1, '', ''),
(3, 'Nghiêm Thị Hồng', '0000-00-00', 'female', 'BG', 2, '', ''),
(4, 'Nguyễn Thành Long', '0000-00-00', 'male', 'Vàng Gianh Uông Bí Quảng Ninh', 1, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `subject_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_name`) VALUES
(1, 'Toán học'),
(2, 'Ngữ văn'),
(3, 'Tiếng Anh'),
(4, 'Lịch sử'),
(6, 'Vật lí'),
(7, 'Hóa học'),
(8, 'Địa lí'),
(9, 'Sinh học'),
(10, 'GDCD'),
(11, 'Công nghệ'),
(12, 'Tin học'),
(13, 'Thể dục'),
(14, 'GDQP');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `role` varchar(50) DEFAULT 'Teacher',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `password`, `full_name`, `email`, `phone_number`, `role`, `created_at`, `status`) VALUES
(1, '1234', 'Nong Huu Nam', 'nam2@gmail.com', NULL, 'Teacher', '2025-02-04 10:43:55', NULL),
(2, '1234', 'Nong Huu Nam', 'nam@gmail.com', NULL, 'Teacher', '2025-02-09 03:53:47', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`grade_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `grade`
--
ALTER TABLE `grade`
  MODIFY `grade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grade`
--
ALTER TABLE `grade`
  ADD CONSTRAINT `grade_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  ADD CONSTRAINT `grade_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`),
  ADD CONSTRAINT `grade_ibfk_3` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
