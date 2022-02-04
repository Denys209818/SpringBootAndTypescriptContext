package program.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import program.entities.CarEntity;
import program.mappers.ApplicationMapper;
import program.models.CarDeleteModel;
import program.models.CarDtoAddModel;
import program.services.CarRepository;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CarController {
    private final CarRepository carRepository;
    private final ApplicationMapper mapper;

    @GetMapping("/get")
    public List<CarEntity> GetCars()
    {
        return carRepository.findAll();
    }

    @PostMapping("/delete")
    public void DeleteCar(@RequestBody CarDeleteModel identifier)
    {
        carRepository.deleteById(Integer.parseInt(identifier.getId()));
    }

    @PostMapping("/create")
    public int CreateCar(@RequestBody CarDtoAddModel model)
    {
        CarEntity entity = mapper.ConvertCarDtoToCar(model);
        System.out.println(entity);
        carRepository.save(entity);
        return entity.getId();
    }
}
