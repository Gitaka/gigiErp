-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2017 at 05:55 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gigi`
--

-- --------------------------------------------------------

--
-- Table structure for table `affiliates`
--

CREATE TABLE `affiliates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `idNo` varchar(255) NOT NULL,
  `uId` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affiliates`
--

INSERT INTO `affiliates` (`id`, `name`, `idNo`, `uId`, `phoneNo`, `email`, `location`, `photo`) VALUES
(1, 'Gitaka Muchai', '236489598', 'HJ30dIPkZ_6087792404', '+254723457943', 'gitakamuchai@gmail.com', 'Nairobi', 'http://www.lorenzanoandyannes.com/wp-content/uploads/2010/09/CEO.jpg'),
(2, 'Irush Brian', '2345737923', 'SyibKIvJZ_7466996648', '+254723456832', 'irushBrian@gmail.com', 'Mombasa', 'http://cdn.ecomento.com/wp-content/uploads/2015/04/Electric-Car-Salesman-1-740x425.jpg'),
(3, 'Kiprono Maritim', '124355454', 'Hy-mdZgQ-_7425902199', '124355454', 'kipronomaritim@gmail.com', 'nairobi', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_posts`
--

CREATE TABLE `affiliate_posts` (
  `id` int(11) NOT NULL,
  `affiliateUid` varchar(255) NOT NULL,
  `post_name` varchar(255) NOT NULL,
  `post_content` varchar(255) NOT NULL,
  `post_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affiliate_posts`
--

INSERT INTO `affiliate_posts` (`id`, `affiliateUid`, `post_name`, `post_content`, `post_date`) VALUES
(2, 'HJ30dIPkZ_6087792404', 'Toyota Fielder ', ' Get the best deals on used cars in Kenya. This White Toyota Fielder (2010) is for Sale in Nairobi, Kenya. Used Overseas Only. Features Include; Air Conditioning, Airbags, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, ', '2017-05-03 16:47:28'),
(3, 'SyibKIvJZ_7466996648', 'Suzuki Swift ', ' Get the best deals on used cars in Kenya. This White Toyota Fielder (2010) is for Sale in Nairobi, Kenya. Used Overseas Only. Features Include; Air Conditioning, Airbags, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, ', '2017-05-03 17:44:04'),
(4, 'SyibKIvJZ_7466996648', 'Suzuki Escudo ', ' Get the best deals on used cars in Kenya. This White Toyota Fielder (2010) is for Sale in Nairobi, Kenya. Used Overseas Only. Features Include; Air Conditioning, Airbags, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, ', '2017-05-03 17:45:44'),
(5, 'Hy-mdZgQ-_7425902199', 'toyota Vitz', 'toyota vitz', '2017-06-16 18:43:56');

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_posts_meta`
--

CREATE TABLE `affiliate_posts_meta` (
  `id` int(11) NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `fabricationYear` varchar(255) NOT NULL,
  `engine` varchar(255) NOT NULL,
  `transmission` varchar(255) NOT NULL,
  `doors` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `bodyType` varchar(255) NOT NULL,
  `mileage` varchar(255) NOT NULL,
  `imgUrl` text NOT NULL,
  `fuel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affiliate_posts_meta`
--

INSERT INTO `affiliate_posts_meta` (`id`, `post_id`, `price`, `fabricationYear`, `engine`, `transmission`, `doors`, `color`, `model`, `bodyType`, `mileage`, `imgUrl`, `fuel`) VALUES
(1, '2', '1,320,00', '2010', '1800 cc', 'Automatic', '4', 'white', 'Toyota Fielder ', 'Station Wagons', '100', 'Toyota-Fielder', 'Petrol'),
(2, '3', '580,000', '2008', '1800 cc', 'Automatic', '4', 'Blue', 'Suzuki Swift ', 'Hatchbacks', '100', '[\"http://gigimotors.co.ke/wp-content/uploads/at_usr_data/car/97/original/5897.jpg\",\"http://gigimotors.co.ke/wp-content/uploads/at_usr_data/car/98/original/5898.jpg\",\"http://gigimotors.co.ke/wp-content/uploads/at_usr_data/car/02/original/5902.jpg\",\r\n\"http://gigimotors.co.ke/wp-content/uploads/at_usr_data/car/03/original/5903.jpg\"]', 'Petrol'),
(3, '4', '580,000', '2010', '2400 cc', 'Automatic', '5', 'Grey', 'Suzuki Escudo ', 'SUVs', '100', 'suzuki-escudo', 'Petrol'),
(4, '5', '500000', '2010', '1200cc', 'automatic', '4', 'green', 'vitz', 'hatchback', '10', 'imgUploader-1497627836198-Toyota-Vitz.jpg', 'petrol');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `idNo` varchar(2555) DEFAULT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `phoneNo`, `idNo`, `location`) VALUES
(1, 'Brian Kiprono', 'kipBrian@gmail.com', '0723457932', '45871296', 'Nairobi'),
(2, 'John Doe', 'johndoe@gmail.com', '0721346342', '34769216', 'Nairobi'),
(5, 'GitakaMuchai', 'gitakamuchai@gmail.com', '0723675984', '8237235845', 'kiambu');

-- --------------------------------------------------------

--
-- Table structure for table `enquiries`
--

CREATE TABLE `enquiries` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `enquiry` text NOT NULL,
  `car_model` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `isDeleted` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiries`
--

INSERT INTO `enquiries` (`id`, `user_id`, `customer_id`, `title`, `enquiry`, `car_model`, `amount`, `date`, `status`, `isDeleted`) VALUES
(1, '1', 1, 'Toyota Land Cruiser', 'Buy a landcruiser prado', 'Toyota Land Cruiser', '35000000', '2017-05-22 10:05:42', 'hot', 1),
(2, '1', 5, 'Toyota Land Cruiser', 'Buy a landcruiser prado', 'Toyota Land Cruiser', '35000000', '2017-06-13 13:10:51', 'hot', 1);

-- --------------------------------------------------------

--
-- Table structure for table `importer_details`
--

CREATE TABLE `importer_details` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `idNo` varchar(255) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `importer_details`
--

INSERT INTO `importer_details` (`id`, `name`, `idNo`, `uid`, `phoneNo`, `email`, `location`) VALUES
(1, 'gitaka Muchai', '23457680', 'rJ5GgPxe-_8607849119', '0723587934', 'gitakamuchai@gmail.com', 'kiambu'),
(2, 'Test Impoter', '346579934', 'Sy0S-vleW_535569479', '07233468923', 'testImpoter@gmail.com', 'Nairobi'),
(3, 'IrushBrian', '12345768', 'Sk363FaGW_874609011', '0723448432', 'irushBriangmail.com', 'Thika'),
(4, 'Kiprono Maritim', '123455565', 'B1U2zZxX-_9829553387', '0723448432', 'kipMaritim@gmail.com', 'nairobi');

-- --------------------------------------------------------

--
-- Table structure for table `imports`
--

CREATE TABLE `imports` (
  `id` int(11) NOT NULL,
  `importer_uid` varchar(255) NOT NULL,
  `import_name` varchar(255) NOT NULL,
  `make` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `budget` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `transmission` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `engine` varchar(255) NOT NULL,
  `fuel` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imports`
--

INSERT INTO `imports` (`id`, `importer_uid`, `import_name`, `make`, `model`, `budget`, `year`, `transmission`, `color`, `engine`, `fuel`, `comments`, `date`) VALUES
(1, 'rJ5GgPxe-_8607849119', 'Suzuki Escudo ', 'SUVs', 'Suzuki Escudo ', '5000000', '2009', 'Automatic', 'Grey', '2400 cc', 'Petrol', 'enquiry about a suzuki escudo', '2017-05-10 13:20:41'),
(2, 'Sy0S-vleW_535569479', 'Suzuki Swift ', 'Hatchbacks', 'Suzuki Swift ', '1500000', '2008', 'Automatic', 'Blue', '1800 cc', 'Petrol', 'Customer asking about a Suzuki swift', '2017-05-10 13:45:40'),
(3, '4323', 'suzuki', 'hatchback', 'escudo', '500000', '2010', '543545', 'blue', '2300cc', 'petrol', 'hey bro', '2017-06-15 15:08:52'),
(4, 'Sk363FaGW_874609011', 'Toyota Fielder', 'toyota', 'fielder', '1120000', '2009', 'automatic', 'silver', '1500cc', 'petrol', 'import a toyota fielder', '2017-06-15 15:45:05');

-- --------------------------------------------------------

--
-- Table structure for table `imports_meta`
--

CREATE TABLE `imports_meta` (
  `id` int(11) NOT NULL,
  `imports_id` int(11) NOT NULL,
  `e_arrival_date` date DEFAULT NULL,
  `shipping` varchar(255) DEFAULT NULL,
  `deposit` double DEFAULT NULL,
  `total_amount` varchar(255) DEFAULT NULL,
  `balance` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imports_meta`
--

INSERT INTO `imports_meta` (`id`, `imports_id`, `e_arrival_date`, `shipping`, `deposit`, `total_amount`, `balance`, `status`) VALUES
(1, 1, '2017-05-10', 'On MV brussels', 500000, '5000000', '4500000', 'Commited'),
(2, 2, '2017-05-10', 'On MV brussels', 1500000, '1500000', '0', 'Cleared'),
(3, 3, NULL, NULL, NULL, NULL, NULL, 'Enquiry'),
(4, 4, NULL, NULL, NULL, NULL, NULL, 'Enquiry');

-- --------------------------------------------------------

--
-- Table structure for table `make`
--

CREATE TABLE `make` (
  `id` int(11) NOT NULL,
  `make` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `make`
--

INSERT INTO `make` (`id`, `make`) VALUES
(1, 'Audi'),
(2, 'BMW'),
(3, 'Chevrolet'),
(4, 'Ford'),
(5, 'Honda'),
(6, 'Hyundai'),
(7, 'Isuzu'),
(8, 'Kia'),
(9, 'Land Rover'),
(10, 'Lexus'),
(11, 'Mazda'),
(12, 'Mercedes-Benz'),
(13, 'Mitsubishi'),
(14, 'Nissan'),
(15, 'Subaru'),
(16, 'Toyota'),
(17, 'Volkswagen'),
(18, 'Volvo'),
(19, 'Jaguar');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `make` int(11) NOT NULL,
  `post_name` varchar(255) NOT NULL,
  `post_content` text NOT NULL,
  `post_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `make`, `post_name`, `post_content`, `post_date`) VALUES
(10, 16, 'Toyota Land Cruiser Prado TRJ150', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-03 13:11:55'),
(11, 19, 'Jaguar X-Type SE Auto, Saloons', 'Get the best deals on used cars in Kenya. This Premium Jaguar X-Type (2009) is for Sale in Nairobi, Kenya. Locally Used, One previous owner. Very Clean and well maintained. Features Include; Air Conditioning, Airbags, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Windows, Power Steering, Tinted Windows, Leather Seats, Steering Controls and much more. We offer financing through banks and also facilitate insurance. Kindly contact us for more details. View more stock: http://gigimotors.co.ke/catalog', '2017-05-03 13:22:20'),
(12, 12, 'Mercedes-Benz C180 ', 'Get the best deals on used cars in Kenya. This Premium Mercedes Benz (2008) is for Sale in Nairobi, Kenya. Locally Used, One previous owner. Features Include; Air Conditioning, Airbags, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Windows, Power Steering, Tinted Windows and much more. We offer financing through banks and also facilitate insurance. Kindly contact us for more details. View more stock: http://gigimotors.co.ke/catalog', '2017-05-03 13:37:30'),
(13, 19, 'Jaguar X-Type', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:33:29'),
(14, 12, 'Mercedes-Benz c180', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:37:47'),
(15, 5, 'Honda Fit', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:41:14'),
(16, 17, 'volkswagen Golf', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:46:53'),
(17, 15, 'Subaru Forester', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:51:00'),
(18, 14, 'Nissan X-Trail', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 17:54:30'),
(19, 2, 'BMW 7 series 730 L d', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 18:01:04'),
(20, 13, 'Mitsubishi OutLander 2.4', 'Drive in style with this 2012 Toyota Landcruiser Prado TRJ150. Air Conditioning, Airbags, Alloy Wheels, AM/FM Radio, Anti-Lock Brakes, Armrests, CD Player, Cup Holders, Electric Mirrors, Electric Windows, Fog Lights,Keyless Entry, Power Steering, Rear Camera, Sidesteps, Spoilers, Tinted Windows, Xenon Lights.', '2017-05-22 18:05:32'),
(23, 16, 'toyota prado', 'toyota prado', '2017-06-16 16:11:38'),
(24, 16, 'Toyota Premio', 'toyota premio', '2017-06-16 17:47:42');

-- --------------------------------------------------------

--
-- Table structure for table `posts_meta`
--

CREATE TABLE `posts_meta` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `fabricationYear` varchar(255) NOT NULL,
  `fuel` varchar(255) NOT NULL,
  `engine` varchar(255) NOT NULL,
  `transmission` varchar(255) NOT NULL,
  `doors` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `bodyType` varchar(255) NOT NULL,
  `mileage` varchar(255) NOT NULL,
  `imgUrl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts_meta`
--

INSERT INTO `posts_meta` (`id`, `post_id`, `price`, `fabricationYear`, `fuel`, `engine`, `transmission`, `doors`, `color`, `model`, `bodyType`, `mileage`, `imgUrl`) VALUES
(1, 10, '5500000', '2012', 'Petrol', '1500 cc', 'Automatic', '5', 'Black', 'Toyota Land Cruiser Prado TRJ150', 'SUV', '100', 'imgUploader-1497541026782prado.png'),
(2, 11, '1,500,00', '2009', 'Diesel', '2200 cc', 'Automatic', '4', 'Blue', 'Jaguar X-Type SE Auto, Saloons', 'Sedan', '100', 'imgUploader-1497541344672jaguar-xtype-1-front.jpg'),
(3, 12, '1,800,00', '2008', 'Petrol', '1800 cc', 'Automatic', '4', 'Silver', 'Mercedes-Benz C180 ', 'Saloons', '100', 'imgUploader-14975413446692018-Mercedes-Benz-S550-Cabriolet-Concept.jpg'),
(4, 13, '1,500,00', '2009', 'Diesel', '2200 cc', 'Automatic', '4', 'Blue', 'jaguar x-type SE Auto,Saloon', 'Saloon', '100', 'imgUploader-1497541344672jaguar-xtype-1-front.jpg'),
(5, 14, '1,800,00', '2008', 'Petrol', '1800 cc', 'Automatic', '4', 'Silver', 'Mercedes-Benz', 'Saloon', '100', 'imgUploader-14975413446692018-Mercedes-Benz-S550-Cabriolet-Concept.jpg'),
(6, 15, '780,00', '2009', 'Petrol', '1800 cc', 'Automatic', '4', 'Black', 'Honda Fit', 'Hatchback', '100', 'imgUploader-1497541026775hondafit.jpg'),
(7, 16, '940,000', '2008', 'Petrol', '1400 cc', 'Automatic', '5', 'Dark Blue', 'Volkswagen Golf', 'Hatchback', '93', 'imgUploader-1497541026772golf_img.png'),
(8, 17, '1600000', '2008', 'Petrol', '2000cc', 'Manual', '5', 'Blue', 'Subaru  Forester', 'Station Wagon', '93', 'imgUploader-14975410267352017-subaru-forester-limited-cvt-suv-angular-front.png'),
(9, 18, '1,820,000', '2008', 'Petrol', '2000cc', 'Automatic', '5', 'Red', 'Nisssan X-Trail', 'SUVs', '93', 'imgUploader-1497541026783X-Trail-Ti_Ruby-Red.jpg'),
(10, 19, '3,900,000', '2008', 'Diesel', '3000cc', 'Automatic', '4', 'Silver', 'BMW 7 series 730', 'Saloon', '93', 'imgUploader-1497541026771bmw-7-series-plug-in-hybrid-3.jpg'),
(11, 20, '2,150,000', '2010', 'Pertol', '2400cc', 'Automatic', '5', 'Grey', 'Mitsubishi Outlander 2.4', 'Hatchbacks', '93', 'imgUploader-149754039108001.png\r\n'),
(12, 23, '3000000', '2015', 'petrol', '1800cc', 'automatic', '4', 'black', 'Prado', 'suv', '10', 'imgUploader-1497618698680-toyotaPrado.jpg'),
(13, 24, '1,200,000', '2012', 'Petrol', '1800cc', 'automatic', '4', 'silver', 'Premio', 'sedan', '12', 'imgUploader-1497624462013-toyota-premio.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `idNo` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `token` text NOT NULL,
  `deleted` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `idNo`, `email`, `phoneNo`, `location`, `password`, `user_role`, `token`, `deleted`) VALUES
(1, 'Gitaka Muchai', 1233444, 'gitakamuchai@gmail.com', '0723545894', 'kiambu', '$2a$10$D/KnlKhjVuz6cXt0GJpPMOa09P9HEdHg81opJQUMMM8XV6i.4AjHG', 'sales', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2l0YWthIE11Y2hhaSIsInBhc3N3b3JkIjoiJDJhJDEwJEQvS25sS2hqVnV6NmNYdDBHSnBQTU9hMDlQOUhFZEhnODFvcEpRVU1NTThYVjZpLjRBakhHIiwiZW1haWwiOiJnaXRha2FtdWNoYWlAZ21haWwuY29tIiwidXNlcl9yb2xlIjoic2FsZXMiLCJpYXQiOjE0OTQ5NDExNDh9.PY-pl_pO6_oWySo9jqDSMwJ10-23SiiSYb7Rw6nCi1o', 1),
(2, 'Brian Irungu', 1243555, 'brianIrosh@gmail.com', '0723456943', 'Nairobi', '$2a$10$QCDKGeweUM5djHcce0SuhujjQ2G4LcHtidiGtwwAy6B0ic7irRfn2', 'sales', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQnJpYW4gSXJ1bmd1IiwicGFzc3dvcmQiOiIkMmEkMTAkUUNES0dld2VVTTVkakhjY2UwU3VodWpqUTJHNExjSHRpZGlHdHd3QXk2QjBpYzdpclJmbjIiLCJlbWFpbCI6ImJyaWFuSXJvc2hAZ21haWwuY29tIiwidXNlcl9yb2xlIjoic2FsZXMiLCJpYXQiOjE0OTQ5NDEyMTd9.eN6LTJOokXAxr6CkYNg2dBajSsaAKHPkJviyKWyZqvg', 1),
(3, 'Kiprono Maritim', 123455, 'kipronoMaritim@gmail.com', '0723448432', 'nairobi', '$2a$10$ZVtQbBQJ5ALIBkdDWfoZYeW4HAtX1Q4PlLumdHznIacVZOyiyLUr2', 'sales', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2lwcm9ubyBNYXJpdGltIiwicGFzc3dvcmQiOiIkMmEkMTAkWlZ0UWJCUUo1QUxJQmtkRFdmb1pZZVc0SEF0WDFRNFBsTHVtZEh6bklhY1ZaT3lpeUxVcjIiLCJlbWFpbCI6ImtpcHJvbm9NYXJpdGltQGdtYWlsLmNvbSIsInVzZXJfcm9sZSI6InNhbGVzIiwiaWF0IjoxNDk3NTM1NjE0fQ.QK0XemwYbGcHsoIKS9MGsbrQbF9lR6kHIXdwU9OJPc0', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affiliates`
--
ALTER TABLE `affiliates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `affiliate_posts`
--
ALTER TABLE `affiliate_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `affiliate_posts_meta`
--
ALTER TABLE `affiliate_posts_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiries`
--
ALTER TABLE `enquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `importer_details`
--
ALTER TABLE `importer_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imports`
--
ALTER TABLE `imports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imports_meta`
--
ALTER TABLE `imports_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `make`
--
ALTER TABLE `make`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_meta`
--
ALTER TABLE `posts_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affiliates`
--
ALTER TABLE `affiliates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `affiliate_posts`
--
ALTER TABLE `affiliate_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `affiliate_posts_meta`
--
ALTER TABLE `affiliate_posts_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `enquiries`
--
ALTER TABLE `enquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `importer_details`
--
ALTER TABLE `importer_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `imports`
--
ALTER TABLE `imports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `imports_meta`
--
ALTER TABLE `imports_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `make`
--
ALTER TABLE `make`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `posts_meta`
--
ALTER TABLE `posts_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
