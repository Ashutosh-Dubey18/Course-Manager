package com.restspring.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	private long id;
	
	private String name;
	
	private String description;
	
	private String link;
	
	public Course() {
	}
	
	public Course(long id, String name, String description, String link) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.link = link;
	}

	
	public long getId() {
		return id;
	}

	
	public void setId(long id) {
		this.id = id;
	}

	
	public String getName() {
		return name;
	}

	
	public void setName(String name) {
		this.name = name;
	}

	
	public String getDescription() {
		return description;
	}

	
	public void setDescription(String description) {
		this.description = description;
	}

	
	public String getLink() {
		return link;
	}
	
	public void setLink(String link) {
		this.link = link;
	}
	
	@Override
	public String toString() {
		return String.format("Course [id=%s, name=%s, description=%s, link=%s]", id, name, description, link);
	}
	

}
