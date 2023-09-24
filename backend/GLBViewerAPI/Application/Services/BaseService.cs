using AutoMapper;
using GLBViewerAPI.Application.Notifications;

namespace GLBViewerAPI.Application.Services;

public abstract class BaseService
{
    protected readonly IMapper Mapper;
    protected readonly INotificator Notificator;

    protected BaseService(INotificator notificator, IMapper mapper)
    {
        Notificator = notificator;
        Mapper = mapper;
    }
}