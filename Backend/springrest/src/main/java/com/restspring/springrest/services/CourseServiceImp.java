package com.restspring.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restspring.springrest.dao.CourseDao;
import com.restspring.springrest.entities.Course;

@Service
public class CourseServiceImp implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImp() {
		//		list = new ArrayList<>();
		//		list.add(new Course(234, "Spring Boot Api", "Learn using spring boot and make awesome apis"));
		//		list.add(new Course(5436, "Spring Security", "Learn to secure your server site app using spring security"));
	}
	
	@Override
	public List<Course> getCourses() {
		List<Course> list = courseDao.findAll();
		List<Course> ans = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getName() != null) {
				ans.add(list.get(i));
			}
		}
		return ans;
	}
	
	@Override
	public Course getCourse(long courseId) {
		return courseDao.getReferenceById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	
	@Override
	public void deleteCourse(long courseId) {
		Course en = courseDao.getReferenceById(courseId);
		courseDao.delete(en);
	}
	
}
