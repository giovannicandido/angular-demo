package com.example.demo.business.pessoa.boundary;

import com.example.demo.business.pessoa.entity.Pessoa;
import org.springframework.data.repository.CrudRepository;

public interface PessoaRepository extends CrudRepository<Pessoa, String> {
}
