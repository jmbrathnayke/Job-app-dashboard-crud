package com.manuj.Spring_JobApp.repo;

import com.manuj.Spring_JobApp.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {


}
