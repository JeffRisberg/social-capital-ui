-- Drop existing tables in reverse order of dependencies
DROP TABLE IF EXISTS full_survey;

-- Create tables
CREATE TABLE `full_survey`
(
   `id`         bigint(10) NOT NULL AUTO_INCREMENT,
   `qn1`        bigint(10) DEFAULT NULL,
   `qn2`        bigint(10) DEFAULT NULL,
   `qn3`        bigint(10) DEFAULT NULL,
   `ql1`        bigint(10) DEFAULT NULL,
   `ql2`        bigint(10) DEFAULT NULL,
   `ql3`        bigint(10) DEFAULT NULL,
   `s1`         varchar(255) DEFAULT "",
   `s2`         bigint(10) DEFAULT NULL,
   `s3`         varchar(255) DEFAULT "",
   `a1`         bigint(10) DEFAULT NULL,
   `a2`         varchar(255) DEFAULT "",
   `a3`         bigint(10) DEFAULT NULL,
   `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
   `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp (),
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
