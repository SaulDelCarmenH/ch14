package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceimp implements IAdminUserService{

	@Override
	public List<AdminUser> Users() {
		//Se hace uso de los métodos de la  capa DAO
		System.out.println("Se enlista los usuarios");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		// TODO Auto-generated method stub
		System.out.println("Guarda el objeto en la base de datos");
		
	}

	@Override
	public void delete(AdminUser adminUser) {
		System.out.println("Elimina el objeto de la base de datos");
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		System.out.println("Encuentra el objeto indicado en la base de datos");
		return null;
	}

	
	
}
