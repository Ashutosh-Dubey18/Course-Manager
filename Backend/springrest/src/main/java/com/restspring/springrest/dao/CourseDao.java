package com.restspring.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restspring.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {
	
}
