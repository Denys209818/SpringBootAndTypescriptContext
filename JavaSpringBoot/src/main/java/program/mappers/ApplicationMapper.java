package program.mappers;

import org.mapstruct.Mapper;
import program.entities.CarEntity;
import program.models.CarDtoAddModel;

@Mapper(componentModel = "spring")
public interface ApplicationMapper {
    CarEntity ConvertCarDtoToCar(CarDtoAddModel model);
}
