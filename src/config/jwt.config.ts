import {ConfigService} from '@nestjs/config' // Import ConfigService to access configuration data
import {JwtModuleOptions} from '@nestjs/jwt'  // Import JwtModuleOptions type for JWT configuration

// Function that will be used to get the configuration for the JWT module
export const getJwtConfig = async ( 
     configService: ConfigService // Input parameter configService - instance of class ConfigService
): Promise <JwtModuleOptions> => ({
       // Return the configuration object for JWT
    secret: configService.get('JWT_SECRET'), // Retrieve the 'JWT_SECRET' value from the configuration via configService
});
