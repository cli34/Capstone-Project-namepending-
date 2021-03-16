-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2021 at 04:50 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mrtwinsister`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` varchar(8) NOT NULL,
  `changelog` int(11) NOT NULL COMMENT 'nonfunctional as of now'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `donorlist`
--

CREATE TABLE `donorlist` (
  `Donorlist_ID` varchar(12) NOT NULL,
  `Request_ID` varchar(8) NOT NULL,
  `Donor_ID` varchar(8) NOT NULL,
  `Donation` double NOT NULL,
  `Donation_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `request_ID` varchar(8) NOT NULL,
  `date_Start` date NOT NULL,
  `date_End` date NOT NULL,
  `Author_ID` varchar(8) NOT NULL,
  `approval_bool` tinyint(1) NOT NULL,
  `approval_AdminID` varchar(8) NOT NULL,
  `funding_Goal` int(11) NOT NULL,
  `funding_Raised` int(11) NOT NULL,
  `inprogress_bool` int(11) NOT NULL,
  `Donorlist` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` varchar(8) NOT NULL,
  `requestsList` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` varchar(8) NOT NULL,
  `AccountType` varchar(1) NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `AccountType`, `Username`, `Password`) VALUES
('00001111', '1', 'student', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `donorlist`
--
ALTER TABLE `donorlist`
  ADD PRIMARY KEY (`Donorlist_ID`),
  ADD KEY `Request` (`Request_ID`),
  ADD KEY `Donor` (`Donor_ID`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`request_ID`),
  ADD KEY `Admin` (`approval_AdminID`),
  ADD KEY `Student/Author` (`Author_ID`),
  ADD KEY `Donorlist` (`Donorlist`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donorlist`
--
ALTER TABLE `donorlist`
  ADD CONSTRAINT `Donor` FOREIGN KEY (`Donor_ID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `Request` FOREIGN KEY (`Request_ID`) REFERENCES `request` (`request_ID`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `Admin` FOREIGN KEY (`approval_AdminID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `Donorlist` FOREIGN KEY (`Donorlist`) REFERENCES `donorlist` (`Donorlist_ID`),
  ADD CONSTRAINT `Student/Author` FOREIGN KEY (`Author_ID`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
