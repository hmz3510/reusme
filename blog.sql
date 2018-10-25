
SET NAMES UTF8;
DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog CHARSET=UTF8;
USE blog;

CREATE TABLE author(
	authorID INT KEY AUTO_INCREMENT,
	authorName VARCHAR(20) NOT NULL UNIQUE,
	authorPassword VARCHAR(32) NOT NULL
);

CREATE TABLE article(
	articleID INT KEY AUTO_INCREMENT,
	articleTitle VARCHAR(100) NOT NULL UNIQUE,
	articleAuthor VARCHAR(20) NOT NULL,
	articleContent LONGTEXT NOT NULL,
	articleTime DATE NOT NULL,
	articleClick INT DEFAULT 0
);
INSERT author values(DEFAULT,'node','e10adc3949ba59abbe56e057f20f883e');
INSERT article SET articleTitle ="Node.js基础知识",articleAuthor="node",articleContent="Node.js基础知识简介",articleTime=CURDATE();
INSERT article SET articleTitle ="Vue.js基础知识",articleAuthor="vue",articleContent="Vue.js基础知识简介",articleTime=CURDATE();
INSERT article SET articleTitle ="React.js基础知识",articleAuthor="react",articleContent="React.js基础知识简介",articleTime=CURDATE();