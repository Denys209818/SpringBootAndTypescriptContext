package program.mappers;

import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import program.entities.CarEntity;
import program.models.CarDtoAddModel;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-02-04T19:15:54+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.12 (Microsoft)"
)
@Component
public class ApplicationMapperImpl implements ApplicationMapper {

    @Override
    public CarEntity ConvertCarDtoToCar(CarDtoAddModel model) {
        if ( model == null ) {
            return null;
        }

        CarEntity carEntity = new CarEntity();

        carEntity.setName( model.getName() );
        carEntity.setDescription( model.getDescription() );
        carEntity.setPrice( model.getPrice() );

        return carEntity;
    }
}
