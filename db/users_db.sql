DROP DATABASE IF EXISTS hollar_db;
CREATE DATABASE hollar_db;
USE hollar_db;
CREATE TABLE IF NOT EXISTS howls(
    user_id int(10) unsigned NOT NULL AUTO_INCREMENT,
    howls_id bigint(20) unsigned NOT NULL,
    howls_text varchar(150) NOT NULL,
    created_at datetime NOT NULL,
    PRIMARY KEY (howls_id)
);
CREATE TABLE IF NOT EXISTS users(
    user_id bigint(20) unsigned NOT NULL,
    profile_name varchar(10) DEFAULT NULL,
    followers_count int(10) unsigned DEFAULT NULL,
    following_count int(10) unsigned DEFAULT NULL,
    created_at datetime NOT NULL,
    PRIMARY KEY (user_id)
);
CREATE TABLE followers (
    user_id bigint(20) unsigned NOT NULL,
    follower_id bigint(20) unsigned NOT NULL,
    following_id bigint(20) unsigned NOT NULL,
    PRIMARY KEY (follower_id)
);