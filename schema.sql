-- Drop existing tables in reverse order of dependencies
DROP TABLE IF EXISTS survey;

-- Create tables
CREATE TABLE `survey`
(
   `id`                     bigint(10) NOT NULL AUTO_INCREMENT,
   `often_do_you_reach_out` varchar(255)       DEFAULT NULL,
   `often_ask_for_help`     varchar(255)       DEFAULT NULL,
   `likely_ask_in_future`   bigint(10) DEFAULT NULL,
   `created_at`             timestamp NOT NULL DEFAULT current_timestamp(),
   `updated_at`             timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp (),
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
