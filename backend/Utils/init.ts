//just example you have to change them as needed

export const create_teamsTable = "CREATE TABLE IF NOT EXISTS `team` (`id` INT NOT NULL AUTO_INCREMENT,`teamname` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`));"
export const create_meetingTable = "CREATE TABLE IF NOT EXISTS`meeting` (`id` INT NOT NULL AUTO_INCREMENT,`team` INT NOT NULL,`start` DATETIME NOT NULL,`end` DATETIME NOT NULL,`description` VARCHAR(200) NULL,`room` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`));"
export const initteamsTable = "REPLACE INTO `team` (`id`, `teamname`) VALUES (1,'React team'),(2,'Mobile team'),(3,'UI team'),(4,'Python team');"
