package com.example.carnextdoor.controller;
import com.example.carnextdoor.model.Entitiec.Owner;
import com.example.carnextdoor.model.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/owner")


public class OwnerController {
    private OwnerService ownerService;



    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping
    public List<Owner> getOwners() {
        return ownerService.getOwners();
    }

    @GetMapping(path = "{ownerId}")
    public Optional<Owner> getOwner(@PathVariable(name = "ownerId") Integer ownerId) {
        return ownerService.getOwner(ownerId);
    }

    @PostMapping("add")
    public void registerNewOwner(@RequestBody Owner owner){
        ownerService.addNewOwner(owner);
    }

    @DeleteMapping(path = "delete/{ownerId}")
    public void deleteOwner(@PathVariable ("ownerId") Integer ownerId){
        ownerService.deleteOwner(ownerId);
    }
}
